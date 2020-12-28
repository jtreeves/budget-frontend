import CategoryDisplay from '../elements/CategoryDisplay'

function Utilities(props) {

  return (
    <div>
      <h3>This is the Utilities page!!!!</h3>
      <CategoryDisplay
        addBudgetInput={props.addBudgetInput}
        deleteBudgetInput={props.deleteBudgetInput}
        budgetKey="utility"
        inputs={props.inputs}
      />
    </div>
  );
}

// Export function
export default Utilities;