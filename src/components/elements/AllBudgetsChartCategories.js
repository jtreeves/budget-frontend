import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,
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
        layout="vertical"
        width={600}
        height={700}
        data={this.props.data}
        margin={{
          top: 0, right: 0, bottom: 0, left: 70,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category"/>
        <Tooltip />
        <Legend />
        {bars}
      </BarChart>
    );
  }
}