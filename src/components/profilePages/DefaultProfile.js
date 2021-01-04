import calcFunctions from '../../utilities/calcFunctions'
import CompactDisplay from "../elements/CompactDisplay";
import CompactTotal from "../elements/CompactTotal";

function DefaultProfile(props) {

  const { housing, utility, transportation, entertainment, food, misc } = props.budget.categories
  const income = props.budget.income
  const subTotals = calcFunctions.calcBudgetSubTotals(props.budget)
  const totalExpense = calcFunctions.calcExpenseTotals(props.budget)
  return (
    <div>
      <h2>Budget Overview</h2>
      {/* <CompactDisplay title="Income" total={income}/> */}
      <CompactTotal totalExpense={totalExpense} totalIncome={income} />
      <CompactDisplay title="Housing" inputs={housing.inputs} total={subTotals.housing}/>
      <CompactDisplay title="Utilities" inputs={utility.inputs} total={subTotals.utility}/>
      <CompactDisplay title="Transportation" inputs={transportation.inputs} total={subTotals.transportation}/>
      <CompactDisplay title="Food & Drink" inputs={food.inputs} total={subTotals.food}/>
      <CompactDisplay title="Entertainment" inputs={entertainment.inputs} total={subTotals.entertainment}/>
      <CompactDisplay title="Miscellaneous" inputs={misc.inputs} total={subTotals.misc}/>
    </div>
  );
}

// Export function
export default DefaultProfile;

