import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const colorArray = ["red", "green", "blue", "orange", "purple"]

export default class Example extends PureComponent {

  
  render() {
    
    let color = 0;

    const bars = this.props.data.map((chartInput, idx) => {
      if (color >= colorArray.length) {
        color = 0;
      } else {
        color += 1;
      }
      return <Bar key={idx} dataKey={chartInput.name} fill={colorArray[color]} />
    })

    return (
      <BarChart
        width={500}
        height={300}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >

        <XAxis dataKey="Type" />
        <YAxis />
        <Tooltip />
        <Legend />
        {bars}
      </BarChart>
    );
  }
}

