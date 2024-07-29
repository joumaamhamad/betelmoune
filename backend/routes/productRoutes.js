import express from 'express';
import User from '../models/userModel.js';

const productsRouter = express.Router();

// GET Products

productsRouter.get('/', async (req, res) => {
  const products = await User.aggregate([
    { $unwind: '$products' },
    { $replaceRoot: { newRoot: '$products' } },
  ]);

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: 'No Products here' });
  }
});

export default productsRouter;
