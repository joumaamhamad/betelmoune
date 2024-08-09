import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import workshopRouter from './routes/workshopRoutes.js';
import productsRouter from './routes/productRoutes.js';
import messagesRouter from './routes/messageRoutes.js';
import cartRouter from './routes/cartRouter.js';


dotenv.config();

console.log('url::', process.env.MONGO_ATLAS);

mongoose
  .connect(process.env.MONGO_ATLAS)
  .then(() => console.log('connected to db!'))
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/workshops', workshopRouter);
app.use('/api/products', productsRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/cart', cartRouter);


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listen on port ${port}!!`);
});
