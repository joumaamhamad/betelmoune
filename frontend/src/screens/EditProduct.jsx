import React from 'react';

const EditProduct = () => {
  return (
    <div className="flex items-start justify-start min-h-screen bg-white-100 p-8 pl-32">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-left">Edit product</h2>
        <form>
          <h3 className="text-xl font-semibold mb-4 text-left">
            Product details
          </h3>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-gray-700 font-bold mb-2 text-left"
            >
              Product name
            </label>
            <input
              type="text"
              id="productName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2 text-left"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2 text-left"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2 text-left"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-left">
            Product images
          </h3>
          <div className="mb-4">
            <img
              src="https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg"
              alt="Product"
              className="w-full h-auto rounded-md mb-4"
            />
            <input type="file" className="w-full text-gray-700" />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring focus:border-red-700"
            >
              Delete product
            </button>
            <div>
              <button
                type="button"
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-700 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
