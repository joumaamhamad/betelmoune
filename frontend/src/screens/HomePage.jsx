import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Aboutus from '../components/Aboutus';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productsSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Contactus from '../components/Contactus';

export default function HomePage() {
  const [workshops, setWorkshops] = useState([]);

  const products = useSelector((state) => state.productsSlice.products);
  console.log('prodd::', products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const { data } = await axios.get('/api/workshops');
      setWorkshops(data);
    };

    fetchWorkshops();
  }, []);

  return (
    <div>
      {' '}
      {/* Single parent container */}
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjuvNQtvyfIon9TONH_qMZetGGFed4ZxvKEUOLWYr6yYm55d0AHzL6i2H2N0FLJnJN5A&usqp=CAU"
          alt="images"
          className="w-full h-[650px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Find everything you need to make the perfect meal
          </h1>
          <div className="flex bg-white text-gray-800 p-2 rounded-lg">
            <CiSearch className="mr-2 mt-3" />
            <input
              type="text"
              placeholder="Search for products"
              className="px-4 py-2 border-none rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
              Search
            </button>
          </div>
        </div>
      </div>
      <Aboutus />
      <div className="container mx-auto p-16">
        <h2 className="text-3xl font-bold mb-8">Daily Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product?.productId}
              className="pb-4 bg-white rounded-lg shadow-md overflow-hidden relative group"
            >
              <img
                src={`/backend/${product.images[0].replace(/\\/g, '/')}`}
                alt={product?.name}
                className="w-full h-48 object-cover cursor-pointer"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">Price: {product.price}</p>
                <button className="bg-green-500 text-white mt-6 py-1 px-3 rounded">
                  Show product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4 pl-16 pr-16 mt-16 mb-16">
        <h1 className="text-center text-2xl font-bold mb-8">#SOME_WORKSHOPS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
          {workshops?.slice(0, 8).map((workshop, index) => (
            <div key={index} className="relative group">
              <Link to={`/workshop/${workshop.slug}`}>
                <img
                  src={workshop?.images[1]}
                  alt={`Gallery ${index}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white text-center px-4">
                    {workshop.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Contactus />
    </div>
  );
}
