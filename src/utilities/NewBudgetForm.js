import Cities from '../utilities/Cities'

function NewBudgetForm(props) {
    const dataOptions = props.copyDataChoices.map((budget, idx) => {
        return (
            <option 
                key={idx} 
                value={budget._id}
            >
                {budget.title}
            </option>
        )
    })

    let colorOptions = props.colorsAvailable.map((color, idx) => {
        return (
            <option key={idx} value={color}>
                {color}
            </option>
        )
    })

    return (
        <form className="form-small">
            <label htmlFor="budgetName">Name</label>
            <input 
                placeholder="New Budget" 
                id="budgetName" 
                type="text" 
                value={props.title} 
                onChange={(e) => props.setName(e.target.value)}
            />
            
            <label htmlFor="budgetIncome">Annual Income</label>
            <input 
                placeholder="50000" 
                id="budgetIncome" 
                type="number" 
                value={props.income} 
                onChange={(e) => props.setIncome(e.target.value)}
            />

            <Cities setLocation={props.setLocation} />

            <label htmlFor="colorScheme">Color</label>
            <select 
                value={props.colorScheme} 
                name="colorScheme" 
                id="colorScheme" 
                onChange={(e) => props.setColor(e.target.value)}
            >
                {colorOptions}
            </select>
            
            <label htmlFor="copyDataFrom">Copy From</label>
            <select 
                value={props.copyDataFrom} 
                name="copyDataFrom" 
                id="copyDataFrom" 
                onChange={(e) => props.setCopyDataFrom(e.target.value)}
            >
                <option value="None">None</option>
                {dataOptions}
            </select>

            <button 
                className="button-small button-left" 
                onClick={(e) => props.handleSubmit(e)}
            >
                Add
            </button>
            
            <button 
                className="button-small" 
                onClick={() => props.setFormDisplayed(false)}
            >
                Cancel
            </button>
        </form>
    )
}

export default NewBudgetForm