import React from 'react';

const AddProduct = () => {
  return (
    <div className="flex items-start justify-start min-h-screen bg-white-100 p-8 pl-32">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-left">Add a new product</h2>
        <form>
          <div className="flex flex-wrap mb-4">
            <div className="w-full lg:w-1/2 pr-2 mb-4">
              <label
                htmlFor="productName"
                className="block text-gray-700 font-bold mb-2 text-left"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="w-full lg:w-1/2 pl-2 mb-4">
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
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full lg:w-1/2 pr-2 mb-4">
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
            <div className="w-full lg:w-1/2 pl-2 mb-4">
              <label
                htmlFor="uploadImage"
                className="block text-gray-700 font-bold mb-2 text-left"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="uploadImage"
                className="w-full text-gray-700"
              />
            </div>
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
          <p className="text-gray-500 text-sm mb-4 text-left">
            Note: Your product will be reviewed before it's published. This may
            take up to 24 hours.
          </p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700"
          >
            Submit for review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
