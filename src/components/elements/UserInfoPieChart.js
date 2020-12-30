import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';


let data = [];
            
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#00FF00', '#FF00FF'];

// const RADIAN = Math.PI / 180;                    

class SimplePieChart extends Component{

	render () {

    let newData = [];

    Object.keys(this.props.subTotals).forEach((key) => {
      let chartInput = Object.create( {name: "", value: null} )
      chartInput.name = key
      chartInput.value = this.props.subTotals[key]
      newData.push(chartInput)
    })

    data = newData;

  	return (
      <ResponsiveContainer width={75} height={75}>
      <PieChart className="PieChart"
      // dimensions for the chart container
      width={75} height={75} onMouseEnter={this.onPieEnter}>
  
        <Pie className="Pie"
          data={data} 
          // Placement of chart on page
          cx={32} 
          cy={33} 
          // Controls size of  
          innerRadius={20} 
          outerRadius={40} 
          // Couldn't get this to do anything. Even on the demo site. 
          fill="#8884d8"
          // paddingAbgle contrtols gap between each portion of the pie chart.
          paddingAngle={2}
        >
          {/* Between PieChart tags map through the data you wish to display. Result of the map is <Cell /> with fill colors assigned to each portion. */}
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default SimplePieChart;