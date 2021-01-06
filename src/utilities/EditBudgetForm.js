import Cities from '../utilities/Cities'

function EditBudgetForm(props) {

  const colorOptions = props.colorsAvailable.map((color, idx) => {
    return <option key={idx} value={color}>{color}</option>
  })

  const currentColorOption = () => {
    return <option value={props.currentColor}>{props.currentColor}</option>
  }
  return (
    <form className="form-small">
      <label>Name</label>
      <input
        type="text"
        value={props.budgetName}
        onChange={(e) => props.setBudgetName(e.target.value)}
      />
      
      <label>Annual Income</label>
      <input
        type="number"
        value={props.income}
        onChange={(e) => props.setIncome(e.target.value)}
      />

      <Cities location={props.location} setLocation={props.setLocation} />

      <label>Color</label>
      <select
        value={props.colorScheme}
        name="colorScheme"
        id="edit-budget-color"
        onChange={(e) => props.setColorScheme(e.target.value)}
      >
        {currentColorOption()}
        {colorOptions}
      </select>

      <button className="button-small button-left" onClick={(e) => props.handleSubmit(e)}>Update</button>
      <button className="button-small" onClick={() => props.setDisplayForm(false)}>Cancel</button>
    </form>
  );
}

export default EditBudgetForm;
