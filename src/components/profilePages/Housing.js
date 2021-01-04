import CategoryDisplay from "../elements/CategoryDisplay";

function Housing(props) {
  return (
    <div>
      <h2>Housing</h2>
      <CategoryDisplay
        budget={props.budget}
        addBudgetInput={props.addBudgetInput}
        deleteBudgetInput={props.deleteBudgetInput}
        budgetKey="housing"
        inputs={props.inputs}
      />
    </div>
  );
}

// Export function
export default Housing;
