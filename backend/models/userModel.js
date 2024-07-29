import mongoose from 'mongoose';
import Product from './productModel.js';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: true },

  products: [Product.schema],

  workshops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workshop' }],
});

const User = mongoose.model('User', userSchema);

export default User;
