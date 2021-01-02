import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const colorArray = ["red", "green", "blue", "orange", "purple"]
export default class AllBudgetsChartCategories extends PureComponent {

  render() {
    
    let color = 0;
    const bars = this.props.budgetArray.map((budget, idx) => {
      if (color >= colorArray.length) {
        color = 0;
      } else {
        color += 1;
      }
      return <Bar key={idx} dataKey={budget.title} fill={colorArray[color]} />
    })

    return (
      <BarChart
        width={700}
        height={300}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {bars}
      </BarChart>
    );
  }
}