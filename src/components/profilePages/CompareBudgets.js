import AllBudgetsChart from '../elements/AllBudgetsCharts'
import calcFunctions from '../../utilities/calcFunctions'

function Housing(props) {

  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, lv: 1800, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', lv: 2000, pv: 9800, amt: 2290,
    },
  ];

  let abbrevBudgetsArray = calcFunctions.calcAllBudgetTotals(props.budgetArray)
  
  console.log(abbrevBudgetsArray);

  return (
    <div>
      <h3>All Budgets</h3>
      <AllBudgetsChart data={data}/>
      <AllBudgetsChart data={data}/>
    </div>
  );
}

// Export function
export default Housing;
