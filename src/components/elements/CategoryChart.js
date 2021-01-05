import React, { PureComponent } from 'react';
import calcFunctions from "../../utilities/calcFunctions";
import {
BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Example extends PureComponent {

  
  render() {
    
    return (
      <BarChart
        width={500}
        height={300}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => calcFunctions.formatCurrency(value)}/>
        <Legend />
        <Bar dataKey={this.props.title} fill={this.props.color} />
      </BarChart>
    );
  }
}

