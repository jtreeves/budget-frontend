import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{name: 'Group A', value: 600}, 
              {name: 'Group B', value: 100},
              {name: 'Group C', value: 500}, 
              {name: 'Group D', value: 1000},
              {name: 'Group E', value: 900}
            ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

// const RADIAN = Math.PI / 180;                    

class SimplePieChart extends Component{
	render () {
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
          innerRadius={10} 
          outerRadius={20} 
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