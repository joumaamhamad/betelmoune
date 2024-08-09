import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { isAuth, isAdmin, generateToken, sendEmail } from '../utils.js';
import asyncHandler from 'express-async-handler';
import upload from '../middleware/upload.js';

const userRouter = express.Router();

userRouter.post('/signin', async (req, res) => {
  console.log(req.body.email);
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    // sendEmail(user , user.email);
    if (bcrypt.compareSync(req.body.password, user.password)) {
      return res.send({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        products: user.products,
        workshops: user.workshops,
        cart: user.cart,
        token: generateToken(user),
        bio: user.bio,
        profileImage: user.profileImage,
      });
    }
  }

  res.status(401).send({ message: 'Invalid email or password!!' });
});

userRouter.post('/signup', async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    products: [],
    bio: '',
    profileImage: ''
  });

  const user = await newUser.save();

  if (user) {
    return res.send({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      products: user.products,
      workshops: user.workshops,
      cart: user.cart,
      token: generateToken(user),
      bio: user.bio,
      profileImage: user.profileImage,
    });
  }

  res.status(404).send({ message: 'Failed To SignUp try again later' });
});

userRouter.get('/:id', async (req, res) => {
  try {
    // Replace with your user identification logic

    console.log(req.params.id)

    const updatedUser = await User.findById(req.params.id);

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: user.isAdmin,
      products: user.products,
      workshops: user.workshops,
      // token: generateToken(user),
      bio: updatedUser.bio,
      profileImage: updatedUser.profileImage,
    });

  } catch (error) {
    res.status(500).send('Server error');
  }
});

userRouter.put('/profile' , asyncHandler(async (req , res) => {
  const user = await User.findById(req.body.id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.bio = req.body.bio || user.bio;
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password);
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: user.isAdmin,
      products: user.products,
      workshops: user.workshops,
      token: generateToken(user),
      bio: updatedUser.bio,
      profileImage: updatedUser.profileImage,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
}))

userRouter.post('/uploadProfileImage' , upload.single('profileImage') , asyncHandler(async (req , res) => {
  if (req.file) {
    const user = await User.findById(req.body.id);

    if (user) {
      user.profileImage = `/${req.file.path}`;
      await user.save();

      res.status(200).json({
        path: user.profileImage,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  } else {
    res.status(400);
    throw new Error('No file uploaded');
  }
}))

export default userRouter;
