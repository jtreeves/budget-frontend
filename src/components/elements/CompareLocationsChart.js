import React, { PureComponent } from 'react';
import calcFunctions from "../../utilities/calcFunctions";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, ResponsiveContainer
} from 'recharts';

const CandyBar = (props) => {
  const {    
    x: oX,
    y: oY,
    width: oWidth,
    height: oHeight,
    value,
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

const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-amount">Expenses: {calcFunctions.formatCurrency(payload[0].value)}</p>
        <p className="tooltip-amount">Savings: {calcFunctions.formatCurrency(payload[1].value)}</p>
      </div>
    );
  }
  return null;
}

export default class CompareLocationsChart extends PureComponent {
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
          <Legend />
          <Bar
            dataKey="Expenses"
            shape={<CandyBar />}
            fill="#aa0100"
          />
          <Bar dataKey="Savings" fill="#367724" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}