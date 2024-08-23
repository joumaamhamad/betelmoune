import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const SatisfactionChart = () => {
  const [satisfactionData, setSatisfactionData] = useState([]);

//   useEffect(() => {
//     const fetchSatisfactionData = async () => {
//       const { data } = await axios.get('/api/satisfaction');
//       setSatisfactionData(data.data);
//     };
//     fetchSatisfactionData();
//   }, []);

  const chartData = {
    labels: ['Satisfied', 'Neutral', 'Unsatisfied'],
    datasets: [
      {
        data: satisfactionData,
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  return(
    // <Pie data={chartData} />
    <div></div>
  );
};

export default SatisfactionChart;
