import { Typography } from '@mui/material';
import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart = ({ data }) => {

  const debitData = data.map((month) => {
    return month.month.map(month => {
      return month.debit
    })
  });

  const creditData = data.map((month) => {
    return month.month.map(month => {
      return month.credit
    })
  });

  const labels = data.map((month) => {
    return month.month.map(month => month.month)
  });




  const chartData = {
    labels: labels[0],
    datasets: [
      {
        label: 'Credit',
        data: creditData[0],
        backgroundColor: 'red',
        borderColor: 'black',
        fill: false,
        borderWidth: 1
      },
      {
        label: 'Debit',
        data: debitData[0],

        backgroundColor: 'green',
        borderColor: 'black',
        fill: false,
        borderWidth: 1
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    elemants:{
      bar:{
        barThickness:1
      }
    },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart">
      <Typography variant='h5'>Monthly Credit and Debit Summary</Typography>
      <Typography >Account:{data[0]?.name}</Typography>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
