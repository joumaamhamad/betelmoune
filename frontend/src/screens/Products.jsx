import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  selectProduct,
  categoriesFilter,
  filterProducts,
  setProductsEmpty,
} from '../store/productsSlice';

const Products = () => {
  const products = useSelector((state) => state.productsSlice.products);
  const categoriesData = useSelector((state) => state.productsSlice.categories);
  const [categories, setCategories] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const searchValue = useRef(null);

  const dispatch = useDispatch();

  // Select Category

  const handleClick = (category, index) => {
    if (isSelected !== index) {
      dispatch(categoriesFilter(category));
      setIsSelected(index);
    } else {
      dispatch(getProducts());
      dispatch(setProductsEmpty());
      setIsSelected(null);
    }
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Set Categories Filter

  useEffect(() => {
    const uniqueCategories = new Set();
    categoriesData.forEach((category) => {
      uniqueCategories.add(category);
    });
    setCategories(Array.from(uniqueCategories));
  }, [categoriesData]);

  return (
    <div className="p-6 font-sans mb-24">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-left text-4xl font-bold mb-6">All Products</h1>
        <div className="flex space-x-4 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded ${
                isSelected === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleClick(category, index)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            ref={searchValue}
            onChange={() => dispatch(filterProducts(searchValue.current.value))}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.length !== 0
            ? products.map((product) => (
                <div
                  className="px-4 rounded-lg shadow-lg hover:opacity-60"
                  key={product.productId}
                  onClick={() => dispatch(selectProduct(product))}
                >
                  <Link to={`/products/${product.slug}`}>
                    <img
                      src={product.img[0]}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-left mt-4 font-semibold">
                      {product.name}
                    </p>
                    <p className="text-left mt-2 text-gray-600">
                      {product.price}
                    </p>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Products;
