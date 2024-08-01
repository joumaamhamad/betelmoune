import express from 'express';
import Workshop from '../models/workshopModel.js';
import { isAuth, isAdmin, generateToken } from '../utils.js';

const workshopRouter = express.Router();

workshopRouter.get('/', async (req, res) => {
  const workshops = await Workshop.find();
  res.send(workshops);
});

workshopRouter.get('/slug/:slug', async (req, res) => {
  try {
    console.log('Received slug:', req.params.slug);

    const workshop = await Workshop.findOne({ slug: req.params.slug });
    console.log('Workshop from database:', workshop);

    if (workshop) {
      res.send(workshop);
    } else {
      res.status(404).send({ message: 'Workshop Not Found' });
    }
  } catch (error) {
    console.error('Error fetching workshop:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export default workshopRouter;
