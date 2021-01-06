import React, { PureComponent } from 'react';
import calcFunctions from "../../utilities/calcFunctions";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, ResponsiveContainer
} from 'recharts';

const colorArray = ["red", "green", "blue", "orange", "purple"]

export default class AllBudgetsChartCategories extends PureComponent {
  render() {
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
      }
    }
    
    const CustomTooltip = ({ payload, active }) => {
      const Budgets = payload.map((budget, idx) => {
        return (
          <p key={`budget-${idx}`}>{budget.name}: {calcFunctions.formatCurrency(budget.value)}</p>
        )
      })
      
      if (active) {
        return (
          <div className="custom-tooltip">
            {Budgets}
          </div>
        );
      }
      return null;
    }
    
    const bars = this.props.budgetArray.map((budget, idx) => {
      return <Bar key={`bar-${idx}`} dataKey={budget.title} fill={provideColorCode(budget.colorScheme)} />
    })

    const updatedData = this.props.data;
    
    updatedData.forEach((budget) => {
      switch (budget.name) {
        case 'Housing':
          budget.name = 'House';
          break;
        case 'Utilities':
          budget.name = 'Util';
          break;
        case 'Transportation':
          budget.name = 'Tran';
          break;
        case 'Food & Drink':
          budget.name = 'Food';
          break;
        case 'Entertainment':
          budget.name = 'Ent';
          break;
        default:
          break;
      }
    })
    
    return (
      <ResponsiveContainer
      className="chart-category-summary"
      width="100%"
      height={600}
      >
        <BarChart
          layout="vertical"
          data={this.props.data}
        >
          <XAxis
            type="number"
            tickLine={false}
          />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
          />
          <Legend />
          {bars}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}