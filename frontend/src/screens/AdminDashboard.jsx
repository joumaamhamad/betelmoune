import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Admin Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Total Users</h2>
          <p className="text-2xl">1,200</p>
        </div>
        <div className=" bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Total Products</h2>
          <p className="text-2xl">1,200</p>
        </div>
        <div className=" bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Total Workshops</h2>
          <p className="text-2xl">1,200</p>
        </div>
        <div className=" bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Total Orders</h2>
          <p className="text-2xl">3,450</p>
        </div>
        <div className=" bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Total Revenue</h2>
          <p className="text-2xl">$15,600</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
