import React, { PureComponent } from 'react'
import calcFunctions from "../../utilities/calcFunctions"
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts'

const provideColorCode = (colorName) => {
    switch (colorName) {
        case 'housing':
            return '#c63b8d'
        case 'utility':
            return '#eb0000'
        case 'food':
            return '#ffb703'
        case 'transportation':
            return '#5cbd3a'
        case 'entertainment':
            return '#019be0'
        case 'misc':
            return '#963899'
    }
}

const CustomTooltip = ({ payload, active }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-amount">
                    {calcFunctions.formatCurrency(payload[0].value)}
                </p>
            </div>
        )
    }
    return null
}

export default class Example extends PureComponent {
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
                    <Bar
                        dataKey={this.props.title}
                        fill={provideColorCode(this.props.budgetKey)}
                    />
                </BarChart>
            </ResponsiveContainer>
        )
    }
}