import express from 'express';
import User from '../models/userModel.js';

const cartRouter = express.Router();

// Add Product To Cart

cartRouter.post('/product', async (req, res) => {
  const filter = { _id: req.body.userId };
  const query = {
    $push: {
      cart: {
        productId: req.body.productId,
        name: req.body.name,
        price: parseFloat(req.body.price),
        quantity: req.body.quantity,
        images: req.body.images,
        description: req.body.description,
        slug: req.body.slug,
        type: req.body.type,
      },
    },
  };

  if (parseFloat(req.body.price) > 0 && req.body.quantity > 0) {
    // Update Cart
    await User.updateOne(filter, query);

    // Find Cart After Update
    const user = await User.find(filter);
    const cart = user[0].cart;

    res.status(200).json(cart);
  } else {
    res.status(400).json({ message: 'Invalid Data' });
  }
});

// Add Workshop To Cart

cartRouter.post('/workshop', async (req, res) => {
  const filter = { _id: req.body.userId };
  const query = {
    $push: {
      cart: {
        workshopId: req.body.workshopId,
        name: req.body.name,
        price: req.body.price,
        images: req.body.images,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date,
        type: req.body.type,
      },
    },
  };

  if (parseFloat(req.body.price) > 0) {
    // Update Cart
    await User.updateOne(filter, query);

    // Find Cart After Update
    const user = await User.find(filter);
    const cart = user[0].cart;

    res.status(200).json(cart);
  } else {
    res.status(400).json({ message: 'Invalid Data' });
  }
});

// Change Quantity of Product

cartRouter.put('/quantity', async (req, res) => {
  const filter = { _id: req.body.userId, 'cart.productId': req.body.productId };
  const update = {
    'cart.$.quantity': req.body.quantity,
  };

  if (req.body.quantity > 0) {
    // Update Cart
    const user = await User.updateOne(filter, update);

    if (user) {
      // Find Cart After Update
      const user = await User.find(filter);
      const cart = user[0].cart;

      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Check your connection and try again' });
    }
  }
});

// Delete Item from Cart

cartRouter.put('/deleteFromCart', async (req, res) => {
  const filter = { _id: req.body.userId };

  const update =
    req.body.type === 'product'
      ? { $pull: { cart: { productId: req.body.itemId } } }
      : { $pull: { cart: { workshopId: req.body.itemId } } };

  // Update Cart
  const user = await User.updateOne(filter, update);

  if (user) {
    // Find Cart After Update
    const user = await User.find(filter);
    const cart = user[0].cart;

    res.status(200).json(cart);
  } else {
    res.status(404).json({ message: 'Item Does not exist' });
  }
});


// Clear Cart
cartRouter.put('/clearCart', async (req, res) => {
  const filter = { _id: req.body.userId };
  const update = { cart: [] };

  const user = await User.updateOne(filter, update);

  if (user) {
    res.status(200).json([]);
  } else {
    res.status(404).json({ message: 'Unable to clear the cart' });
  }
});


// Return Quantity of Product When Delete From Cart

cartRouter.put('/returnquantity', async (req, res) => {
  const filter = {
    'products.productId': req.body.itemId,
  };

  // Find the user to get the current quantity
  const user = await User.findOne(filter);

  if (user) {
    const product = user.products.find(
      (product) => product.productId.toString() === req.body.itemId
    );

    if (product && req.body.quantity !== 0) {
      const update = {
        $inc: { 'products.$.quantity': +req.body.quantity },
      };

      const updateCheck = await User.updateOne(filter, update);

      if (updateCheck.modifiedCount > 0) {
        res.status(200).json(updateCheck.acknowledged);
      } else {
        res
          .status(400)
          .json({ message: 'Check your Connection and try again' });
      }
    }
  } else {
    res.status(500).json({ message: 'Failed Operation' });
  }
});


export default cartRouter;
