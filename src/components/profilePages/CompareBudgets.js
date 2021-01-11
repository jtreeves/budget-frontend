import AllBudgetsChartTotals from '../elements/AllBudgetsChartTotals'
import calcFunctions from '../../utilities/calcFunctions'
import AllBudgetsChartCategories from '../elements/AllBudgetsChartCategories'

function Housing(props) {
    // Data for Totals Chart
    const totalsData = []
    let abbrevBudgetsArray = calcFunctions.calcAllBudgetTotals(props.budgetArray)
    abbrevBudgetsArray.forEach((budget) => {
        let budgetObj = {
            name: budget.title,
            Expense: budget.totalExpense,
            Income: budget.totalIncome
        }
        totalsData.push(budgetObj)
    })
    
    // data for categories chart
    const dataReformat = []
    const housing = {
        name: "Housing"
    }
    const utility = {
        name: "Utilities"
    }
    const transportation = {
        name: "Transportation"
    }
    const food = {
        name: "Food & Drink"
    }
    const entertainment = {
        name: "Entertainment"
    }
    const misc = {
        name: "Misc"
    }

    props.budgetArray.forEach((budget) => {
        let budgetSubtotals = {
            title: budget.title
        }
        budgetSubtotals.subTotals = calcFunctions.calcBudgetSubTotals(budget)
        dataReformat.push(budgetSubtotals)
    })

    dataReformat.forEach((obj) => {
        housing[obj.title] = obj.subTotals.housing
        utility[obj.title] = obj.subTotals.utility
        transportation[obj.title] = obj.subTotals.transportation
        food[obj.title] = obj.subTotals.food
        entertainment[obj.title] = obj.subTotals.entertainment
        misc[obj.title] = obj.subTotals.misc
    })

    const catagoriesData = [
        housing,
        utility,
        transportation,
        food,
        entertainment,
        misc
    ]

    return (
        <div className="div-compare-budgets-page">
            <h2>Compare Budgets</h2>

            <h3>Monthly Income & Expenses</h3>
            <AllBudgetsChartTotals
                data={totalsData}
                colorScheme={props.budget.colorScheme}
                budgetArray={props.budgetArray}
            />
            
            <h3 className="compare-budgets-heading2">
                Monthly Expenses by Category
            </h3>
            <AllBudgetsChartCategories 
                budgetArray={props.budgetArray} 
                data={catagoriesData}
            />
        </div>
    )
}

// Export function
export default Housing