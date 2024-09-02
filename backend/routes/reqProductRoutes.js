import express from 'express';
import upload from '../middleware/uploadProducts.js';
import RequestProduct from '../models/requestProductModel.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';

const reqProductRouter = express.Router();

reqProductRouter.get('/', async (req, res) => {
  try {
    console.log('allllll')
    const requestProducts = await RequestProduct.find();

    res.status(200).json(requestProducts);
  } catch (error) {
    console.error('Error fetching request products:', error);
    res.status(500).json({ message: 'Failed to fetch request products', error });
  }
});


reqProductRouter.post('/addProduct/:userId', upload , async (req, res) => {

    console.log('Request body:', req.body);
    console.log('Uploaded files:', req.files);

    const { productName, price, category, quantity, description } = req.body;
    const userId = req.params.userId;
    
    const images = req.files.map((file) => file.path); // Save file paths to the images array
  
    try {
      const newProduct = new RequestProduct({
        productId: null,  // You can set this later when the product is officially added
        name: productName,
        price,
        category,
        quantity,
        description,
        images,
        user: userId,
        slug: productName.toLowerCase().split(' ').join('-'), // Automatically generate slug
      });
  
      await newProduct.save();
  
      res.status(201).json({ message: 'Product submitted for review successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting the product', error: error.message });
    }
});

reqProductRouter.put('/:productId/admit', async (req, res) => {
  try {
    const { productId } = req.params;
    

    // Find the requested product
    const requestProduct = await RequestProduct.findById(productId);
    if (!requestProduct) {
      return res.status(404).json({ message: 'Requested product not found' });
    }

    // Create a new product instance with the same data
    const newProduct = new Product({
      name: requestProduct.name,
      price: requestProduct.price,
      category: requestProduct.category,
      quantity: requestProduct.quantity,
      description: requestProduct.description,
      images: requestProduct.images,
      slug: requestProduct.slug, // Assuming your RequestProduct has a slug field
    });

    // Assign productId to be the same as the automatically generated _id
    newProduct.productId = newProduct._id;

    // Find the user by ID (assuming the user ID is passed in the request body)
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add the new product to the user's products array
    user.products.push(newProduct);
    await user.save();

    // Remove the product from the RequestProducts collection
    await RequestProduct.findByIdAndDelete(productId);

    res.status(200).json({ message: 'Product admitted successfully and moved to user products', product: newProduct });
  } catch (error) {
    console.error('Error admitting product:', error);
    res.status(500).json({ message: 'Failed to admit product', error });
  }
});
  

reqProductRouter.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    // Find and delete the requested product from the collection
    const deletedProduct = await RequestProduct.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Requested product not found' });
    }

    res.status(200).json({ message: 'Product rejected and deleted successfully' });
  } catch (error) {
    console.error('Error rejecting product:', error);
    res.status(500).json({ message: 'Failed to reject product', error });
  }
});




export default reqProductRouter;
// module.exports = reqProductRouter;