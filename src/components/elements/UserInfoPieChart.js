import React, { Component } from 'react'
import calcFunctions from "../../utilities/calcFunctions";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
            
const COLORS = ['#c63b8d', '#eb0000', '#ffb703', '#5cbd3a', '#019be0', '#963899', '#ccc'];

// const RADIAN = Math.PI / 180;                    

class UserInfoPieChart extends Component{

	render () {
    let data = [];
    let totalExpenses = 0;

    Object.keys(this.props.subTotals).forEach((key) => {
        let chartInput = Object.create({ name: "", value: null })
        chartInput.name = key;
        chartInput.value = this.props.subTotals[key];
        totalExpenses += chartInput.value
        data.push(chartInput);
    })
    
    const amountLeftOver = this.props.income - totalExpenses;
    
    if (amountLeftOver > 0) {
      let chartInput = Object.create({ name: "", value: null })
      chartInput.name = 'Left Over';
      chartInput.value = amountLeftOver;
      data.push(chartInput);
    }

    console.log(data);

  	return (
      <ResponsiveContainer className="chart-budget-summary" width={236} height={236}>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie className="Pie"
            data={data} 
            outerRadius={118} 
            fill="#8884d8"
          >
            {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip formatter={(value) => calcFunctions.formatCurrency(value)}/>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default UserInfoPieChart;