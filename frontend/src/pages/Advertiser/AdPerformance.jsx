import React from 'react';
import Chart from '../../components/Chart';

const AdPerformance = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Clicks',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Ad Performance</h1>
      <div className="mt-4">
        <Chart data={data} />
      </div>
    </div>
  );
};

export default AdPerformance;