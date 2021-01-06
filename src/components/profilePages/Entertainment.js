import CategoryDisplay from '../elements/CategoryDisplay'

function Entertainment(props) {

  return (
    <div>
      <h2>Entertainment</h2>
      <CategoryDisplay
        budget={props.budget}
        addBudgetInput={props.addBudgetInput}
        deleteBudgetInput={props.deleteBudgetInput}
        budgetKey="entertainment"
        inputs={props.inputs}
      />
    </div>
  )
}

// Export function
export default Entertainment