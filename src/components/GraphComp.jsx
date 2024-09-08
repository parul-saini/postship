// GraphComp.js
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';


const data = [
  { name: 'Intransit', value: 27 },
  { name: 'Pending', value: 23 },
  { name: 'Delivered', value: 10 },
  { name: 'Out for delivery', value: 7 },  
  { name: 'Exception', value: 32 },
];
//   OFD    deleivered    pending     intransit   exception   
//  ['#ffddb6', '#ffc879', '#e5a500', '#956f00', '#5e4200'];
const COLORS = ['#956f00', '#e5a500','#ffc879','#ffddb6','#5e4200',];

const GraphComp = () => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default GraphComp;
