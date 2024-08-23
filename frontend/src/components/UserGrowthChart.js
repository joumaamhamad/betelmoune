import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const UserGrowthChart = () => {
  const [userGrowthData, setUserGrowthData] = useState([]);

  useEffect(() => {
    const fetchUserGrowthData = async () => {
      const { data } = await axios.get('/api/charts/userGrowth');
      setUserGrowthData(data.data);
    };
    fetchUserGrowthData();
  }, []);

  const chartData = {
    labels: userGrowthData.map(data => data.month),
    datasets: [
      {
        label: 'User Growth',
        data: userGrowthData.map(data => data.users),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default UserGrowthChart;
