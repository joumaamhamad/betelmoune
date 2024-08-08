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

export default workshopRouter;
