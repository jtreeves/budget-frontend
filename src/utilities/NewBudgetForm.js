import Cities from '../utilities/Cities'

function NewBudgetForm(props) {
  const dataOptions = props.copyDataChoices.map((budget, idx) => {
    return <option key={idx} value={budget._id}>{budget.title}</option>
  })

  return (
    <form className="form-small">
      <label htmlFor="budgetName">Name</label>
      <input id="budgetName" type="text" value={props.title} onChange={(e) => props.setName(e.target.value)}/>
      
      <label htmlFor="budgetIncome">Annual Income</label>
      <input id="budgetIncome" type="number" value={props.income} onChange={(e) => props.setIncome(e.target.value)}/>

      <Cities setLocation={props.setLocation}/>

      <label htmlFor="colorScheme">Color</label>
      <select value={props.colorScheme} name="colorScheme" id="colorScheme" onChange={(e) => props.setColor(e.target.value)}>
        <option value="Magenta">Magenta</option>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
      </select>
      
      <label htmlFor="copyDataFrom">Copy From</label>
      <select value={props.copyDataFrom} name="copyDataFrom" id="copyDataFrom" onChange={(e) => props.setCopyDataFrom(e.target.value)}>
        <option value="None">None</option>
        {dataOptions}
      </select>

      <button className="button-small button-left" onClick={(e) => props.handleSubmit(e)}>Add</button>
      <button className="button-small" onClick={() => props.setFormDisplayed(false)}>Cancel</button>
    </form>
  )
}

export default NewBudgetForm