import calcFunctions from '../../utilities/calcFunctions'
import CompactDisplay from "../elements/CompactDisplay";
import CompactTotal from "../elements/CompactTotal";

function DefaultProfile(props) {

  const { housing, utility, transportation, entertainment, food, misc, income } = props.budget.categories
  const subTotals = calcFunctions.calcBudgetSubTotals(props.budget)
  const totalExpense = calcFunctions.calcExpenseTotals(props.budget)
  return (
    <div>
      <h2>Overview</h2>
      <CompactDisplay compactContainerId="cc-income" title="Income" inputs={income.inputs} total={subTotals.income}/>
      <CompactTotal totalExpense={totalExpense} totalIncome={subTotals.income} colorScheme={props.budget.colorScheme} />
      <CompactDisplay compactContainerId="cc-housing" title="Housing" inputs={housing.inputs} total={subTotals.housing}/>
      <CompactDisplay compactContainerId="cc-utility" title="Utilities" inputs={utility.inputs} total={subTotals.utility}/>
      <CompactDisplay compactContainerId="cc-food" title="Food & Drink" inputs={food.inputs} total={subTotals.food}/>
      <CompactDisplay compactContainerId="cc-transportation" title="Transportation" inputs={transportation.inputs} total={subTotals.transportation}/>
      <CompactDisplay compactContainerId="cc-entertainment" title="Entertainment" inputs={entertainment.inputs} total={subTotals.entertainment}/>
      <CompactDisplay compactContainerId="cc-misc" title="Miscellaneous" inputs={misc.inputs} total={subTotals.misc}/>
    </div>
  );
}

// Export function
export default DefaultProfile;

