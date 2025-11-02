import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ assetSum, liabilitySum }) {
  const data = {
    labels: ["Total Assets", "Total Liabilities"],
    datasets: [
      {
        data: [assetSum, liabilitySum],
        backgroundColor: [
          'rgb(56, 125, 241)',  // Blue for Assets
          'rgb(255, 88, 45)'    // Red for Liabilities
        ],
        borderColor: [
          'rgb(56, 125, 241)',
          'rgb(255, 88, 45)'
        ],
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Asset vs. Liability Distribution',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#011c46',
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '370px' }} display="flex" alignItems="center" justifyContent="center">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
