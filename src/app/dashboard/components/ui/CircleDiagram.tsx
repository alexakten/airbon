import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

interface CircleDiagramProps {
  percentage: number; // Specify that percentage is a number
}

const CircleDiagram: React.FC<CircleDiagramProps> = ({ percentage }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#4CAF50', '#E0E0E0'],
        borderWidth: 0,
      }
    ],
    labels: ['Regenerative', 'Non-regenerative'],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  return (
    <Doughnut data={data} options={options} />
  );
};

export default CircleDiagram;
