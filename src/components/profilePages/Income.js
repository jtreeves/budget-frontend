import CategoryDisplay from '../elements/CategoryDisplay'

function Income(props) {
    return (
        <div>
            <h2>Income</h2>
            <CategoryDisplay
                budget={props.budget}
                addBudgetInput={props.addBudgetInput}
                deleteBudgetInput={props.deleteBudgetInput}
                budgetKey="income"
                inputs={props.inputs}
            />
        </div>
    )
}

// Export function
export default Income