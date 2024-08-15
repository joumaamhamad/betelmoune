import express from 'express';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

orderRouter.post('/' , async (req , res) => {

    console.log(req.body)
    try {
        const newOrder = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            shippingPrice: req.body.shippingPrice,
            totalPrice: req.body.totalPrice,
            user: req.body.user,
            paidAt: Date.now(),
        });
    
        const createdOrder = await newOrder.save();
        res.status(201).send({ message: 'New Order Created', order: createdOrder });
      } catch (err) {
        res.status(500).send({ message: 'Error in Creating Order', error: err.message });
      }
})

export default orderRouter;