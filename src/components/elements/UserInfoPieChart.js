import React, { Component } from 'react'
import calcFunctions from "../../utilities/calcFunctions"
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
            
const COLORS = ['#c63b8d', '#eb0000', '#ffb703', '#5cbd3a', '#019be0', '#963899', '#ccc']               

class UserInfoPieChart extends Component{
	render () {
        let data = []
        let totalExpenses = 0
        
        Object.keys(this.props.subTotals).forEach((key) => {
            let chartInput = Object.create({ name: "", value: null })
            chartInput.name = key
            chartInput.value = this.props.subTotals[key]
            totalExpenses += chartInput.value
            data.push(chartInput)
        })
        
        const amountLeftOver = this.props.income - totalExpenses
        
        if (amountLeftOver > 0) {
            let chartInput = Object.create({ name: "", value: null })
            chartInput.name = 'Left Over'
            chartInput.value = amountLeftOver
            data.push(chartInput)
        }
        
        const provideLabel = (name) => {
            switch (name) {
                case 'utility':
                    return 'Utilities'
                case 'food':
                    return 'Food & Drink'
                case 'misc':
                    return 'Miscellaneous'
                default:
                    return name
            }
        }
        
        const CustomTooltip = ({ payload, active }) => {
            if (active) {
                return (
                    <div className="custom-tooltip">
                        <p className="tooltip-label">
                            {provideLabel(payload[0].name)}
                        </p>
                        <p className="tooltip-amount">
                            {calcFunctions.formatCurrency(payload[0].value)}
                        </p>
                    </div>
                )
            }
            return null
        }

        return (
            <PieChart 
                className="chart-budget-summary" 
                width={236} 
                height={236} 
                onMouseEnter={this.onPieEnter}
            >
                <Pie
                    dataKey='value'
                    data={data} 
                    outerRadius={118} 
                    fill="#8884d8"
                >
                    {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        )
    }
}

export default UserInfoPieChart