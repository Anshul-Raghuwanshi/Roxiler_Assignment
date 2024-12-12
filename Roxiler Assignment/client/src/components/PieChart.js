import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ pieChartData = [] }) => {
  // Ensure pieChartData is an array before mapping
  if (!Array.isArray(pieChartData) || pieChartData.length === 0) {
    return <div>No data available for the Pie Chart</div>;
  }

  return (
    <div>
      <h3>Pie Chart</h3>
      {/* Rendering logic for pie chart */}
      <div>
        {pieChartData.map((category, index) => (
          <div key={index}>
            {category.name}: {category.count}
          </div>
        ))}
      </div>
    </div>
  );
};


export default PieChart;
