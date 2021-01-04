import Cities from '../utilities/Cities'

function EditBudgetForm(props) {
  return (
    <form className="form-small">
      <label>Name</label>
      <input
        type="text"
        value={props.budgetName}
        onChange={(e) => props.setBudgetName(e.target.value)}
      />
      <label>Color</label>
      <select
        value={props.colorScheme}
        name="colorScheme"
        id="colorScheme"
        onChange={(e) => props.setColorScheme(e.target.value)}
      >
        <option value="Magenta">Magenta</option>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
      </select>
      <p>
        <Cities location={props.location} setLocation={props.setLocation} />
      </p>
      <p>
        <strong>Income:</strong>
        <input
          type="number"
          value={props.income}
          onChange={(e) => props.setIncome(e.target.value)}
        />
      </p>
      <button className="button-small button-left" onClick={() => props.handleSubmit()}>Update</button>
      <button className="button-small" onClick={() => props.setDisplayForm(false)}>Cancel</button>
    </form>
  );
}

export default EditBudgetForm;
