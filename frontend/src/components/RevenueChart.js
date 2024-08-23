import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const RevenueChart = () => {
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchRevenueData = async () => {
      const { data } = await axios.get('/api/charts/revenue');
      setRevenueData(data.data);
    };
    fetchRevenueData();
  }, []);

  const chartData = {
    labels: revenueData.map((_, index) => `Order ${index + 1}`),
    datasets: [
      {
        label: 'Revenue',
        data: revenueData,
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default RevenueChart;
