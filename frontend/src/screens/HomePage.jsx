import React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function HomePage() {
  return (
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
  );
}
