import React from 'react';
import { useSelector } from 'react-redux';

const ProductsDetails = () => {
  const selectedProduct = useSelector(
    (state) => state.productsSlice.selectedProduct
  );

  return (
    <div className="flex flex-col wrap text-left mt-24 ml-32 mb-24">
      <div>
        <h3 className="text-3xl font-bold mb-4">{selectedProduct?.name}</h3>
      </div>
      <div className="text-gray-500 mb-4">capacity:</div>
      <div className="text-2xl font-bold mb-6">{selectedProduct?.price}</div>
      <div className="grid grid-cols-5 gap-4 mb-6">
        {selectedProduct.img.map((img, index) => (
          <img
            key={index}
            className="w-full h-52 object-cover rounded-md"
            src={img}
            alt="Product"
          ></img>
        ))}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Workshop Details</h3>
      </div>
      <div className="mb-8">
        <p className="text-gray-500">{selectedProduct?.description}</p>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
