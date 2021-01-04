import CategoryDisplay from '../elements/CategoryDisplay'

function Entertainment(props) {

  return (
    <div>
      <h3>This is the Food and Drinnks page!!!!</h3>
      <CategoryDisplay
        budget={props.budget}
        addBudgetInput={props.addBudgetInput}
        deleteBudgetInput={props.deleteBudgetInput}
        budgetKey="entertainment"
        inputs={props.inputs}
      />
    </div>
  );
}

// Export function
export default Entertainment;