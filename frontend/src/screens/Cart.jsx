import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { changeQuantity, deleteFromCart } from '../store/cartSlice';
import { selectProduct } from '../store/productsSlice';

const Cart = () => {
  const user = useSelector((state) => state.authSlice.user);
  const cart = useSelector((state) => state.authSlice.cart);
  const products = useSelector((state) => state.productsSlice.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Change Quantity of Product

  const qunatityHanlder = (product, operator) => {
    if (operator === '-') {
      const productData = {
        userId: user._id,
        productId: product.productId,
        quantity: product.quantity - 1,
      };
      dispatch(changeQuantity(productData));
    } else {
      const productData = {
        userId: user._id,
        productId: product.productId,
        quantity: product.quantity + 1,
      };
      dispatch(changeQuantity(productData));
    }
  };

  // Delete Item from Cart

  const deleteHanlder = (itemId, type) => {
    const itemData = {
      userId: user._id,
      itemId: itemId,
      type: type,
    };
    dispatch(deleteFromCart(itemData));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (

    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="space-y-6">
        {cart.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between relative ${
              item.type === 'product' ? 'bg-green-200' : 'bg-green-300'
            } p-4 rounded-lg transition-all hover:shadow-md hover:bg-green-400`}
          >
            <div
              className="w-[90%] flex items-center space-x-4"
              onClick={() => {
                dispatch(selectProduct(item));
                item.type === 'product'
                  ? navigate('/products/:slug')
                  : navigate('/workshop/:slug');
              }}
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-left text-gray-500 italic">
                  {item.type === 'product' ? 'Product' : 'Workshop'}
                </p>
                <p className="text-base text-left font-semibold text-gray-700">
                  ${item.price}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {item.type === 'product' ? (
                <>
                  <button
                    className="bg-gray-300 text-gray-700 text-xl px-4 rounded-md hover:bg-gray-400 transition"
                    onClick={() => qunatityHanlder(item, '-')}
                  >
                    -
                  </button>
                  <span className="text-lg font-medium text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    className="bg-gray-300 text-gray-700 text-xl px-4 rounded-md hover:bg-gray-400 transition"
                    onClick={() => qunatityHanlder(item, '+')}
                  >
                    +
                  </button>
                </>
              ) : null}

            </div>
            <button
              className="absolute bg-red-400 text-black-600 p-2 rounded-full hover:bg-red-300 transition"
              style={{ top: '-8%', right: '-10px' }}
              onClick={() =>
                item.type === 'product'
                  ? deleteHanlder(item.productId, item.type)
                  : deleteHanlder(item.workshopId, item.type)
              }
            >
              <IoClose />
            </button>
          </div>
        ))}
      </div>
      {cart.length !== 0 ? (
        <div className="mt-6">
          <button className="w-full bg-red-500 text-white py-3 rounded-lg text-center hover:bg-red-600 transition">
            Checkout
          </button>
        </div>
      ) : (
        "You Don't have any Items in Cart"
      )}
      {user !== null ? (
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            You May Also Like
          </h3>
          <div className="flex space-x-4">
            {products.slice(0, 3).map((product, index) => (
              <div
                key={index}
                className="bg-white border cursor-pointer rounded-lg p-4 shadow-md w-1/3"
                onClick={() => {
                  dispatch(selectProduct(product));
                  navigate('/products/:slug');
                }}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-32 rounded-lg object-cover mb-4"
                />
                <h4 className="text-lg font-medium text-gray-800">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
