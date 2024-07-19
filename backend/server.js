import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('url::' , process.env.MONGO_ATLAS)

mongoose.connect(process.env.MONGO_ATLAS).then
( 
    () => console.log("connected to db!")

).catch((err) => {

    console.log(err.message);
})

