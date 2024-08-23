import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { fetchWorkshopData } from '../services/chartService';
import { fetchWorkshopData } from '../services/chartServices.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// Display Workshop Registrations per Month
const WorkshopRegistrationChart = () => {
  const [workshopData, setWorkshopData] = useState([]);

  useEffect(() => {
    const getWorkshopData = async () => {
      const data = await fetchWorkshopData();
      console.log('workshop data::' , data)
      setWorkshopData(data);
    };
    getWorkshopData();
  }, []);

  const data = {
    labels: workshopData.map((item) => `Month ${item._id}`),
    datasets: [
      {
        label: 'Total Registrations',
        data: workshopData.map((item) => item.totalRegistrations),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WorkshopRegistrationChart;
