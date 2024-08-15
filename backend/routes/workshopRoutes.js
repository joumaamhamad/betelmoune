import express from 'express';
import Workshop from '../models/workshopModel.js';
import User from '../models/userModel.js';
import { isAuth, isAdmin, generateToken } from '../utils.js';

const workshopRouter = express.Router();

workshopRouter.get('/', async (req, res) => {
  const workshops = await Workshop.find();
  res.send(workshops);
});

workshopRouter.get('/slug/:slug', async (req, res) => {
  try {
    const workshop = await Workshop.findOne({ slug: req.params.slug });

    if (workshop) {
      res.send(workshop);
    } else {
      res.status(404).send({ message: 'Workshop Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

workshopRouter.put('/:id/register', async (req, res) => {
  
  console.log('lllll')
  try {
    console.log('lllll')
    const workshop = await Workshop.findById(req.params.id);
    if (workshop) {
      if (!workshop.registeredUsers.includes(req.body.userId)) {
        workshop.registeredUsers.push(req.body.userId);
        await workshop.save();
        res.status(200).json({ message: 'User registered successfully' });
      } else {
        res.status(400).json({ message: 'User is already registered' });
      }
    } else {
      res.status(404).json({ message: 'Workshop not found' });
    }
  } catch (error) {
    res.status(500).json({ message: getError(error) });
  }
});

export default workshopRouter;
