import React, { useEffect, useState } from 'react';
import SalesChart from '../components/SalesChart';
import UserCount from '../components/UserCount';
import WorkshopRegistrationChart from '../components/WorkshopRegistrationChart';
import RevenueChart from '../components/RevenueChart';
import UserGrowthChart from '../components/UserGrowthChart';
import ProductPerformanceChart from '../components/ProductPerformanceChart';
import RefundsReturnsChart from '../components/RefundsReturnsChart';
import UserDemographicsChart from '../components/UserDemographicsChart';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getError } from '../utils';
import RevenueByCategoryChart from '../components/RevenueByCategoryChart';
import CustomerRetentionChart from '../components/CustomerRetentionChart';

// import DailyRetentionRateChart from '../components/CustomerRetentionChart';
// import OrderFulfillmentTimeChart from '../components/OrderFulfillmentTimeChart';

const AdminDashboard = () => {
  const products = useSelector((state) => state.productsSlice.products);
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const { data } = await axios.get('/api/workshops');
        setWorkshops(data);
      } catch (error) {
        console.log(getError(error));
      }
    };
    fetchWorkshops();
  }, []);

  return (
    <div className="min-h-screen p-6 mb-24 mt-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
        {/* <div className="text-sm text-gray-600">Welcome, Admin</div> */}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Row */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Total Users</h2>
          <UserCount />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Total Products</h2>
          <h2>Total Products: {products.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Total Workshops</h2>
          <h2>Total Workshops: {workshops?.length}</h2>
        </div>
        

        {/* Middle Row */}

        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Revenue</h2>
          <RevenueChart />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">User Growth</h2>
          <UserGrowthChart />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Product Performance</h2>
          <ProductPerformanceChart />
        </div>

        {/* <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Workshop Registrations</h2>
          <WorkshopRegistrationChart />
        </div> */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Order Fulfillment Time</h2>
          <OrderFulfillmentTimeChart />
        </div> */}

        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Sales Data</h2>
          <SalesChart />
        </div>

        {/* Revenue by Category Chart */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <RevenueByCategoryChart />
          </div> */}

          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <UserDemographicsChart />
          </div> */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
            <UserDemographicsChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Customer Retention Rate</h2>
          <CustomerRetentionChart />
        </div>

        

        {/* <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">User Demographics</h2>
          <UserDemographicsChart />
        </div> */}

        {/* Refunds and Returns Chart */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md col-span-1 h-80">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Refunds and Returns</h2>
          <RefundsReturnsChart />
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
