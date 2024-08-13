import React, { useState } from 'react';

const ProductList = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'shoes',
      price: '100',
      category: 'cloth',
      description: 'this is a shoes',
      slug: 'sample-product',
      quantity: 10,
    },
    {
      id: 2,
      name: 'shoes',
      price: '100',
      category: 'cloth',
      description: 'this is a shoes',
      slug: 'sample-product',
      quantity: 10,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    slug: '',
    quantity: '',
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    slug: '',
    quantity: '',
  });
  const [isCreating, setIsCreating] = useState(false);

  const handleEditClick = (product) => {
    setEditingProduct(product.id);
    setEditFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      slug: product.slug,
      quantity: product.quantity,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (isCreating) {
      setNewProduct({
        ...newProduct,
        [name]: type === 'checkbox' ? checked : value,
      });
    } else {
      setEditFormData({
        ...editFormData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSaveClick = () => {
    setProducts(
      products.map((product) =>
        product.id === editingProduct
          ? { ...product, ...editFormData }
          : product
      )
    );
    setEditingProduct(null);
  };

  const handleCreateClick = () => {
    setIsCreating(true);
    setNewProduct({
      name: '',
      price: '',
      category: '',
      description: '',
      slug: '',
      quantity: '',
    });
  };

  const handleAddNewProduct = () => {
    const newId = products.length + 1; // Or generate a unique ID as needed
    setProducts([...products, { id: newId, ...newProduct }]);
    setIsCreating(false);
    setNewProduct({
      name: '',
      price: '',
      category: '',
      description: '',
      slug: '',
      quantity: '',
    });
  };

  const handleCancelCreate = () => {
    setIsCreating(false);
    setNewProduct({
      name: '',
      price: '',
      category: '',
      description: '',
      slug: '',
      quantity: '',
    });
  };

  const handleDeleteClick = (productId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-left text-4xl font-bold mb-6">Products</h1>
      </header>

      <main className="p-6">
        <div className="mb-4">
          <button
            onClick={handleCreateClick}
            className="flex bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create Product
          </button>
        </div>

        {isCreating && (
          <div className="mb-6">
            <h2 className="text-2xl mb-4">Add New Product</h2>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newProduct.category}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newProduct.description}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="text"
                name="slug"
                placeholder="Slug"
                value={newProduct.slug}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 mb-2"
              />
            </div>
            <button
              onClick={handleAddNewProduct}
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
            >
              Add Product
            </button>
            <button
              onClick={handleCancelCreate}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="py-2 px-4 text-center">ID</th>
                <th className="py-2 px-4 text-center">Name</th>
                <th className="py-2 px-4 text-center">Price</th>
                <th className="py-2 px-4 text-center">Category</th>
                <th className="py-2 px-4 text-center">Description</th>
                <th className="py-2 px-4 text-center">Slug</th>
                <th className="py-2 px-4 text-center">Quantity</th>
                <th className="py-2 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="py-2 px-4">{product.id}</td>
                  <td className="py-2 px-4">
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editingProduct === product.id ? (
                      <input
                        type="number"
                        name="price"
                        value={editFormData.price}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      product.price
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        name="category"
                        value={editFormData.category}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      product.category
                    )}
                  </td>

                  <td className="py-2 px-4">
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        name="description"
                        value={editFormData.description}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      product.description
                    )}
                  </td>

                  <td className="py-2 px-4">
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        name="slug"
                        value={editFormData.slug}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      product.slug
                    )}
                  </td>

                  <td className="py-2 px-4">
                    {editingProduct === product.id ? (
                      <input
                        type="number"
                        name="quantity"
                        value={editFormData.quantity}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      product.quantity
                    )}
                  </td>

                  <td className="py-2 px-4">
                    {editingProduct === product.id ? (
                      <button
                        onClick={handleSaveClick}
                        className="text-green-500 hover:underline"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditClick(product)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteClick(product.id)}
                      className="ml-4 text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
