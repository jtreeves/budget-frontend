import CategoryDisplay from '../elements/CategoryDisplay'

function Miscellaneous(props) {
    return (
        <div>
            <h2>Miscellaneous</h2>
            <CategoryDisplay
                budget={props.budget}
                addBudgetInput={props.addBudgetInput}
                deleteBudgetInput={props.deleteBudgetInput}
                budgetKey="misc"
                inputs={props.inputs}
            />
        </div>
    )
}

// Export function
export default Miscellaneous