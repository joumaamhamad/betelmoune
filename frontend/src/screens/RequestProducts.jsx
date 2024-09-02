import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestProducts = () => {
  const [requestProducts, setRequestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequestProducts = async () => {
      try {
        console.log('llllllllllllllll')
        const response = await axios.get('/api/requestProducts');
        console.log('ressss' , response.data)
        setRequestProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requested products');
        setLoading(false);
      }
    };

    fetchRequestProducts();
  }, []);

  const handleAdmitClick = async (productId, userId) => {
    try {
      await axios.put(`/api/requestProducts/${productId}/admit`, { userId });
      setRequestProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (err) {
      console.error('Failed to admit product:', err);
    }
  };

  const handleRejectClick = async (productId) => {
    try {
      await axios.delete(`/api/requestProducts/${productId}`);
      setRequestProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (err) {
      console.error('Failed to reject product:', err);
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        {error}
      </div>
    );
  }

  if (requestProducts.length === 0) {
    return <div className="text-center">No Requested Products Found</div>;
  }

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-left text-4xl font-bold mb-6">Requested Products</h1>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="py-2 px-4 text-center">Product ID</th>
              <th className="py-2 px-4 text-center">Name</th>
              <th className="py-2 px-4 text-center">Price</th>
              <th className="py-2 px-4 text-center">Category</th>
              <th className="py-2 px-4 text-center">Quantity</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {requestProducts.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="py-2 px-4">{product._id}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">{product.quantity}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleAdmitClick(product._id , product.user)}
                    className="text-green-500 hover:underline"
                  >
                    Admit
                  </button>
                  <button
                    onClick={() => handleRejectClick(product._id)}
                    className="text-red-500 hover:underline ml-2"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestProducts;

