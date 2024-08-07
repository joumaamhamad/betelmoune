import React, { useState } from 'react';

const Cart = () => {
  const [quantities, setQuantities] = useState({
    chickenBreast: 1,
    oliveOil: 1,
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
          <div className="flex items-center space-x-4 bg-gray-200 p-4">
            <img
              src="https://www.daylesford.com/media/catalog/product/2/1/21010060_organic-free-range-chicken-fillets-skinless-400g.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width="
              alt="Organic Chicken Breast"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Organic Chicken Breast</h3>
              <p className="text-gray-600">$15.00 • 1.5 lbs</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="bg-white text-gray-700 px-3 py-1 rounded"
                onClick={() => handleDecrement('chickenBreast')}
              >
                -
              </button>
              <span>{quantities.chickenBreast}</span>
              <button
                className="bg-white text-gray-700 px-3 py-1 rounded"
                onClick={() => handleIncrement('chickenBreast')}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gray-200 p-4">
            <img
              src="https://i.pinimg.com/originals/3f/e6/ad/3fe6adc970f1b89c3c8b6d61ae05d347.jpg"
              alt="olive Oil"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Olive Oil</h3>
              <p className="text-gray-600">$12.00 • 16.9 oz</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="bg-white text-gray-700 px-3 py-1 rounded"
                onClick={() => handleDecrement('oliveOil')}
              >
                -
              </button>
              <span>{quantities.oliveOil}</span>
              <button
                className="bg-white text-gray-700 px-3 py-1 rounded"
                onClick={() => handleIncrement('oliveOil')}
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
