import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  price: { type: Number },
  img: { type: String },
  category: { type: String },
  description: { type: String },
  // displayedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
