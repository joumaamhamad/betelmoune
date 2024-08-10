import express from 'express';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import upload from '../middleware/uploadProducts.js';
import slugify from 'slugify'; 

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

productsRouter.post('/addProduct/:id', upload, async (req, res) => {
  try {
    const { productName, price, category, quantity, description } = req.body;
    const imagePaths = req.files.map((file) => file.path);

    // Generate a slug from the product name
    const slug = slugify(productName, { lower: true });

    // Create a new product, but don't save it yet
    const product = new Product({
      name: productName,
      price,
      category,
      quantity,
      description,
      images: imagePaths,
      slug, // Add the generated slug
    });

    // Assign productId to be the same as the automatically generated _id
    product.productId = product._id;

    console.log(product);

    // Find the user by ID and add the product to their list of products
    const user = await User.findById(req.params.id);
    user.products.push(product);
    await user.save();

    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to add product', error });
  }
});

export default productsRouter;
