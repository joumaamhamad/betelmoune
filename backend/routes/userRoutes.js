import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { isAuth, isAdmin, generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.post('/signin', async (req, res) => {

  console.log(req.body.email);

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      return res.send({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        products: user.products,
        workshops: user.workshops,
        token: generateToken(user),
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
      token: generateToken(user),
    });
  }

  res.status(404).send({ message: 'Failed To SignUp try again later' });

});

export default userRouter;
