import CategoryDisplay from '../elements/CategoryDisplay'

function Transportation(props) {

  return (
    <div>
      <h2>Transportation</h2>
      <CategoryDisplay
        budget={props.budget}
        addBudgetInput={props.addBudgetInput}
        deleteBudgetInput={props.deleteBudgetInput}
        budgetKey="transportation"
        inputs={props.inputs}
      />
    </div>
  )
}

// Export function
export default Transportation