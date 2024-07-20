import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';

dotenv.config();

console.log('url::', process.env.MONGO_ATLAS);

mongoose
  .connect(process.env.MONGO_ATLAS)
  .then(() => console.log('connected to db!'))
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listen on port ${port}!!`);
});
