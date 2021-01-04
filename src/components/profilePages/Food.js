import CategoryDisplay from '../elements/CategoryDisplay'

function Food(props) {

  return (
    <div>
      <h2>Food & Drink</h2>
      <CategoryDisplay
        budget={props.budget}
        addBudgetInput={props.addBudgetInput}
        deleteBudgetInput={props.deleteBudgetInput}
        budgetKey="food"
        inputs={props.inputs}
      />
    </div>
  );
}

// Export function
export default Food;