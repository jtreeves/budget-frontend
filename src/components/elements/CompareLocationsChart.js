import React, { PureComponent } from 'react'
import calcFunctions from "../../utilities/calcFunctions"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-amount">Expenses: {calcFunctions.formatCurrency(payload[0].value)}</p>
        <p className="tooltip-amount">Savings: {calcFunctions.formatCurrency(payload[1].value)}</p>
      </div>
    )
  }
  return null
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
          <Bar dataKey="Expenses" fill="#eb0000" />
          <Bar dataKey="Savings" fill="#5cbd3a" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}