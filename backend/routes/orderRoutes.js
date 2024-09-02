import express from 'express';
import Order from '../models/orderModel.js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const orderRouter = express.Router();

orderRouter.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newOrder = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
      user: req.body.user,
      paidAt: req.body.paymentMethod === 'Stripe' ? Date.now() : null,
    });

    const createdOrder = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order: createdOrder });
  } catch (err) {
    res
      .status(500)
      .send({ message: 'Error in Creating Order', error: err.message });
  }
});

orderRouter.post('/create-payment-intent', async (req, res) => {
  const { totalPrice } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalPrice * 100), // Convert to cents
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: 'Error creating payment intent', error: err.message });
  }
});

orderRouter.get('/', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

orderRouter.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default orderRouter;
