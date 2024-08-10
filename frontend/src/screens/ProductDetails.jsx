import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCart } from '../store/cartSlice';

const ProductsDetails = () => {
  const user = useSelector((state) => state.authSlice.user);

  const selectedProduct = useSelector(
    (state) => state.productsSlice.selectedProduct
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Quantity of Product

  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (operator) => {
    if (operator === '+') {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  // Add to Cart

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const productData = {
      userId: user._id,
      productId: selectedProduct.productId,
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: quantity,
      images: selectedProduct.images,
      description: selectedProduct.description,
      type: 'product',
    };

    setIsAddedToCart(!isAddedToCart);
    dispatch(addProductToCart(productData));
    saveToLocalStorage('cart', selectedProduct, 20);
  };

  // Save in LocalStorage for 20 minutes

  const saveToLocalStorage = (key, value, expirationInMinutes) => {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + expirationInMinutes * 60 * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  const loadFromLocalStorage = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  };

  useEffect(() => {
    loadFromLocalStorage();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col wrap text-left mt-24 ml-32 mb-24">
      <div>
        <h3 className="text-3xl font-bold mb-4">{selectedProduct?.name}</h3>
      </div>
      <div className="text-gray-500 mb-4">capacity:</div>
      <div className="text-2xl font-bold mb-6">{selectedProduct?.price}$</div>
      <div className="grid grid-cols-5 gap-4 mb-6">
        {selectedProduct.images.map((img, index) => (
          <img
            key={index}
            className="w-full h-52 object-cover rounded-md"
            src={`/backend/${img.replace(/\\/g, '/')}`}
            alt="Product"
          ></img>
        ))}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Product Details</h3>
      </div>
      <div className="mb-8">
        <p className="text-gray-500">{selectedProduct?.description}</p>
      </div>
      <div className="flex items-center space-x-4 mr-72">
        <div className="ml-auto">
          <div className="flex items-center">
            <button
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300"
              onClick={() => changeQuantity('-')}
            >
              -
            </button>
            <span className="bg-white border border-gray-300 px-4 py-1">
              {quantity}
            </span>
            <button
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300"
              onClick={() => changeQuantity('+')}
            >
              +
            </button>
          </div>
        </div>
        {isAddedToCart ? (
          <button
            className={`bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600`}
            onClick={() => navigate('/cart')}
          >
            View in cart
          </button>
        ) : (
          <button
            className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600`}
            onClick={() => handleAddToCart()}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsDetails;
