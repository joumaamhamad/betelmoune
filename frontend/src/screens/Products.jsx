import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productsSlice';

const Products = () => {
  const products = useSelector((state) => state.productsSlice.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="p-6 font-sans">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-left text-4xl font-bold mb-6">Products</h1>
        <div className="flex space-x-4 mb-6">
          <button className="bg-gray-200 px-4 py-2 rounded">All</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Published</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Draft</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Archived</button>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              className="px-4 rounded-lg shadow-lg hover:opacity-60"
              key={product.productId}
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-left mt-4 font-semibold">{product.name}</p>
              <p className="text-left mt-2 text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
