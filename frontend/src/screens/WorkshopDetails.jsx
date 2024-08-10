import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getError } from '../utils';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkshopToCart } from '../store/cartSlice';

export default function WorkshopDetails() {
  const params = useParams();
  const [workshop, setWorkshop] = useState();

  // console.log('iddddd::' , id);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/workshops/slug/${params.slug}`);
        console.log('data::', data);
        setWorkshop(data);
      } catch (error) {
        console.log(getError(error));
      }
    };

    fetchData();
  }, []);

  const user = useSelector((state) => state.authSlice.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Add to Cart

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const workshopData = {
      userId: user._id,
      workshopId: workshop._id,
      name: workshop.name,
      price: workshop.capacity,
      images: workshop.images,
      description: workshop.description,
      duration: workshop.duration,
      date: workshop.date,
      type: 'workshop',
    };

    setIsAddedToCart(!isAddedToCart);
    dispatch(addWorkshopToCart(workshopData));
    saveToLocalStorage('cart', workshop, 20);
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
  }, []);

  return (
    <div className="flex flex-col wrap text-left mt-24 ml-32 mb-24">
      <div>
        <h3 className="text-3xl font-bold mb-4">{workshop?.name}</h3>
      </div>
      <div className="text-gray-500 mb-4">
        duration: <span class="font-semibold">{workshop?.duration}hr </span>{' '}
        capacity: <span class="font-semibold">{workshop?.capacity}</span>
      </div>
      <div className="text-2xl font-bold mb-6">{workshop?.price}$</div>
      <div className="grid grid-cols-5 gap-4 mb-6">
        <img
          className="w-full h-52 object-cover rounded-md"
          src={workshop?.images[0]}
          alt="Product img 1"
        ></img>
        <img
          className="w-full h-52 object-cover rounded-md"
          src={workshop?.images[1]}
          alt="Product img 2"
        ></img>
        <img
          className="w-full h-52 object-cover rounded-md"
          src={workshop?.images[2]}
          alt="Product img 3"
        ></img>
        <img
          className="w-full h-52 object-cover rounded-md"
          src={workshop?.images[3]}
          alt="Product img 4"
        ></img>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Workshop Details</h3>
      </div>
      <div className="mb-8">
        <p className="text-gray-500">{workshop?.description}</p>
      </div>
      <div className="flex justify-end space-x-4 mr-72">
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
        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300">
          Register
        </button>
      </div>
    </div>
  );
}
