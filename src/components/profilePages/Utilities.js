import CategoryDisplay from '../elements/CategoryDisplay'

function Utilities(props) {
    return (
        <div>
            <h2>Utilities</h2>
            <CategoryDisplay
                budget={props.budget}
                addBudgetInput={props.addBudgetInput}
                deleteBudgetInput={props.deleteBudgetInput}
                budgetKey="utility"
                inputs={props.inputs}
            />
        </div>
    )
}

// Export function
export default Utilities