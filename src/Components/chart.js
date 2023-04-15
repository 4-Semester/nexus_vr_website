import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
  { name: 'Monday', clicks: 2 },
  { name: 'Tuesday', clicks: 5 },
  { name: 'Wednesday', clicks: 3 },
  { name: 'Thursday', clicks: 7 },
  { name: 'Friday', clicks: 4 },
  { name: 'Saturday', clicks: 6 },
  { name: 'Sunday', clicks: 1 }
];

const SimpleLineChart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
    </LineChart>
  );
}

export default SimpleLineChart;
