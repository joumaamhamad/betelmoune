import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { clearCart } from '../store/cartSlice';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authSlice.user);
  const cart = useSelector((state) => state.authSlice.cart);

  console.log('cart:::',cart)

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Stripe'); 

  const submitHandler = async (e) => {
    e.preventDefault();

    const orderData = {
      orderItems: cart.map((item) => ({
        slug: item.slug,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        product: item.productId,
      })),
      shippingAddress: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
      paymentMethod,
      shippingPrice: 20, 
      totalPrice: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      user: user._id,
    };

    try {
      const { data } = await axios.post('/api/orders', orderData);
      alert('The order is saved!');

      
      dispatch(clearCart(user._id));

      navigate('/cart');
    } catch (err) {
      console.error('Order submission failed', err);
    }
  };
  return (
    <div>
      <div className="w-1/2 mx-auto p-4 mt-6 mb-12">
        <h1 className="text-2xl font-bold my-3">Shipping Address</h1>
        <form onSubmit={submitHandler} className="space-y-4">
          <div className="mb-3">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 block w-full px-6 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Stripe">Stripe</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
