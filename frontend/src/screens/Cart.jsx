import React, { useState } from 'react';

const Cart = () => {
  const [quantities, setQuantities] = useState({
    chickenBreast: 1,
    avocadoOil: 1,
  });

  const handleIncrement = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] + 1,
    }));
  };

  const handleDecrement = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] > 1 ? prevQuantities[item] - 1 : 1,
    }));
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-start">Your Cart</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg"
              alt="Organic Chicken Breast"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Organic Chicken Breast</h3>
              <p className="text-gray-600">$15.00 • 1.5 lbs</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                onClick={() => handleDecrement('chickenBreast')}
              >
                -
              </button>
              <span>{quantities.chickenBreast}</span>
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                onClick={() => handleIncrement('chickenBreast')}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://silkroadrecipes.com/wp-content/uploads/2020/07/Lebanese-Seven-Spice-Blend-square.jpg"
              alt="Avocado Oil"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Avocado Oil</h3>
              <p className="text-gray-600">$12.00 • 16.9 oz</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                onClick={() => handleDecrement('avocadoOil')}
              >
                -
              </button>
              <span>{quantities.avocadoOil}</span>
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                onClick={() => handleIncrement('avocadoOil')}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 flex items-start p-4">
        You may also like
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg">
          <img
            src="https://miro.medium.com/v2/resize:fit:1080/1*qlBeWAKsZNZjNmCy4cloWw.png"
            alt="Grass-fed Ground Beef"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">Grass-fed Ground Beef</h3>
          <p className="text-gray-600">$10.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <img
            src="https://www.four-seasons.ro/images/evenimente/spices-four-seasons2.png"
            alt="Organic Baby Spinach"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">Organic Baby Spinach</h3>
          <p className="text-gray-600">$5.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <img
            src="https://www.cooking-therapy.com/wp-content/uploads/2020/08/Pickled-Vegetables-5.jpg"
            alt="Wild-caught Sockeye Salmon"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">Wild-caught Sockeye Salmon</h3>
          <p className="text-gray-600">$15.00</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
