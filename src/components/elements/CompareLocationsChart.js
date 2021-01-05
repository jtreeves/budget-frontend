import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,
} from 'recharts';

export default class CompareLocationsChart extends PureComponent {

  render() {
    
    // let color = 0;
    // const bars = this.props.budgetArray.map((budget, idx) => {
    //   if (color >= colorArray.length) {
    //     color = 0;
    //   } else {
    //     color += 1;
    //   }
    //   return <Bar key={idx} dataKey={budget.title} fill={colorArray[color]} />
    // })

    return (
      <BarChart
        layout="horizontal"
        width={600}
        height={700}
        data={this.props.data}
        margin={{
          top: 0, right: 200, bottom: 0, left: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" type="category"/>
        <YAxis type="number"  />
        <Tooltip />
        <Legend />
        <Bar dataKey="Expenses" fill="tomato" />
        <Bar dataKey="Savings" fill="dodgerblue" />
      </BarChart>
    );
  }
}