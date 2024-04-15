import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineGraphProps {
  monthlySpend: number[]; // Array of monthly expenditures
}

const LineGraph: React.FC<LineGraphProps> = ({ monthlySpend }) => {
  const data = {
    labels: Array.from({ length: 12 }, (_, i) => new Date(0, i + 1, 0).toLocaleString('default', { month: 'short' })),
    datasets: [
      {
        data: monthlySpend,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
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
        display: false
      },
      title: {
        display: false,
      },
    }
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
