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
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <button className="button-small button-left" onClick={() => props.handleSubmit()}>Update</button>
      <button className="button-small" onClick={() => props.setDisplayForm(false)}>Cancel</button>
    </form>
  );
}

export default EditBudgetForm;
