import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
            
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#00FF00', '#CCC'];

// const RADIAN = Math.PI / 180;                    

class UserInfoPieChart extends Component{

	render () {
    let data = [];
    let totalExpenses = 0;

    Object.keys(this.props.subTotals).forEach((key) => {
      if (key !== 'income') {
        let chartInput = Object.create({ name: "", value: null })
        chartInput.name = key;
        chartInput.value = this.props.subTotals[key];
        totalExpenses += chartInput.value
        data.push(chartInput);
      }
    })
    
    const amountLeftOver = this.props.subTotals.income - totalExpenses;
    
    if (amountLeftOver > 0) {
      let chartInput = Object.create({ name: "", value: null })
      chartInput.name = 'Left Over';
      chartInput.value = amountLeftOver;
      data.push(chartInput);
    }
    



    console.log(data);

  	return (
      <ResponsiveContainer width={236} height={236}>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie className="Pie"
            data={data} 
            outerRadius={118} 
            fill="#8884d8"
          >
            {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default UserInfoPieChart;