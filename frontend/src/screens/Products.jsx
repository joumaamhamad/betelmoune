import React from 'react';
import NavBarPlus from '../components/NavBarPlus';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$25',
    imageUrl:
      'https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$35',
    imageUrl:
      'https://www.196flavors.com/wp-content/uploads/2021/10/kishk-1fp-768x768.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$45',
    imageUrl:
      'https://hadiaslebanesecuisine.com/newsite/wp-content/uploads/2014/02/labneh-balls-2000-1-2-280x300.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$55',
    imageUrl:
      'https://th.bing.com/th/id/R.e1ff1f918fdd89583cba774c766f52d6?rik=SHYRXaa1MVXtkg&pid=ImgRaw&r=0',
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$65',
    imageUrl:
      'https://aradbranding.com/en/uploads/topics/mceu_34229569921705138667028.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$75',
    imageUrl:
      'https://th.bing.com/th/id/OIP.rg_ITLcVeWjhwPRssFckDwHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 7,
    name: 'Product 7',
    price: '$85',
    imageUrl:
      'https://www.tastingtable.com/img/gallery/15-different-types-of-pickles-and-what-makes-them-unique/dill-pickles-1666816503.jpg',
  },
  {
    id: 8,
    name: 'Product 8',
    price: '$95',
    imageUrl:
      'https://th.bing.com/th/id/OIP.v6car4EOBwnJ5506tzoGqAHaFe?rs=1&pid=ImgDetMain',
  },
  {
    id: 9,
    name: 'Product 9',
    price: '$105',
    imageUrl:
      'https://i0.wp.com/cookingbride.com/wp-content/uploads/2021/01/strawberry-jam-IMG_0688-H.jpg?fit=1600%2C1200&ssl=1',
  },
  {
    id: 10,
    name: 'Product 10',
    price: '$115',
    imageUrl:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIe25rd3zUb_uXQh7uhMAA0Pc8aK2IZGgFilcDWwFbrpUfyZkExUvPyNaAHqhrKLrjdR-ag8nR5y3NyM6ZnaxvIxE6kvnWCaKPUg_pwI9L2ZojwUSoi1BXDV5L5P5nCrWwoWyjIuQwvxKKmOzkh2Kyn_XTTd_CqSaYmpqqtGj0pCfffTf6wcZ6jQRZpg/s16000/f.jpg',
  },
];

const Products = () => {
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
              key={product.id}
            >
              <img
                src={product.imageUrl}
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
