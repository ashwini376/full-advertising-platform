import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Line data={data} />
    </div>
  );
};

export default Chart;