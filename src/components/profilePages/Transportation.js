import CategoryDisplay from '../elements/CategoryDisplay'

function Transportation(props) {

  return (
    <div>
      <h3>This is the Transportation page!!!!</h3>
      <CategoryDisplay
        addBudgetInput={props.addBudgetInput}
        deleteBudgetInput={props.deleteBudgetInput}
        budgetKey="transportation"
        inputs={props.inputs}
      />
    </div>
  );
}

// Export function
export default Transportation;