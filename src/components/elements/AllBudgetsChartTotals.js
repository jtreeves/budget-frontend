import React, { PureComponent } from 'react';
import calcFunctions from "../../utilities/calcFunctions";
import {
  BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const CandyBar = (props) => {
  const {    
    x: oX,
    y: oY,
    width: oWidth,
    height: oHeight,
    fill
  } = props;
  
  let x = oX;
  let y = oHeight < 0 ? oY + oHeight : oY;
  let width = oWidth;
  let height = Math.abs(oHeight);

  return (
   <rect fill={fill}
       mask='url(#mask-stripe)'
          x={x}
          y={y}
          width={width}
          height={height} />
    );
};

const provideColorCode = (colorName) => {
  switch (colorName) {
    case 'Magenta':
      return '#9f2e71';
    case 'Red':
      return '#aa0100';
    case 'Orange':
      return '#f68200';
    case 'Green':
      return '#367724';
    case 'Blue':
      return '#116b90';
    case 'Purple':
      return '#5e235f';
    default: 
      break;
  }
}

const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-amount">Income: {calcFunctions.formatCurrency(payload[0].value)}</p>
        <p className="tooltip-amount">Expenses: {calcFunctions.formatCurrency(payload[1].value)}</p>
      </div>
    );
  }
  return null;
}

export default class AllBudgetsChartTotals extends PureComponent {
  render() {
    return (
      <ResponsiveContainer
        className="chart-category-summary"
        width="100%"
        height={300}
      >
        <BarChart
          data={this.props.data}
          maxBarSize={100}
        >
          <pattern id="pattern-stripe" 
          width="4" height="4" 
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)">
          <rect width="2" height="4" transform="translate(0,0)" fill="white">
          </rect>
          </pattern>
          <mask id="mask-stripe">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
          </mask>
          
          <XAxis
            dataKey="name"
            tickLine={false}
          />
          <YAxis tickLine={false} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
          />
          <Legend 
            payload={
              [
                {
                  value: 'Income',
                  type: 'cross'
                }, 
                {
                  value: 'Expenses',
                  type: 'square'
                }
              ]
            }
          />
          <Bar
            dataKey="Income"
            shape={<CandyBar />}
          >
            {this.props.budgetArray.map((budget, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={provideColorCode(budget.colorScheme)}
                />
              );
            })}
          </Bar>
          <Bar dataKey="Expense">
            {this.props.budgetArray.map((budget, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={provideColorCode(budget.colorScheme)}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}