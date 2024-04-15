import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Interface for the component props
interface BarChartProps {
  totalHectares: number;
  regenerativeHectares: number;
}

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC<BarChartProps> = ({ totalHectares, regenerativeHectares }) => {
  const data = {
    labels: ['Total Hectares', 'Regenerative Hectares'],
    datasets: [
      {
        label: 'Hectares',
        data: [totalHectares, regenerativeHectares],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false // Ensures that the legend does not appear
      },
      title: {
        display: false,
        text: 'Farm Land Overview',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
