import BarChartExample from '../elements/BarChartExample'
import AllBudgetsChartTotals from '../elements/AllBudgetsChartTotals'
import calcFunctions from '../../utilities/calcFunctions'
import AllBudgetsChartCategories from '../elements/AllBudgetsChartCategories';

function Housing(props) {

  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, 
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, 
    },
    {
      name: 'Page C', lv: 2000, pv: 9800, 
    },
  ];


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
      title: budget.title,
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


  let mockUp = [
    {
      name: Housing, "Budget 1": 200, "Budget 2": 21, "Budget 3": 500
    }
  ]

  return (
    <div>
      <h3>Totals</h3>
      <AllBudgetsChartTotals data={totalsData}/>
      <h3>Across Categories</h3>
      <AllBudgetsChartCategories budgetArray={props.budgetArray} data={catagoriesData}/>
    </div>
  );
}

// Export function
export default Housing;