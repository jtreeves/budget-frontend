function EditBudgetForm(props) {
  return (
    <div>
      <input
        type="text"
        value={props.budgetName}
        onChange={(e) => props.setBudgetName(e.target.value)}
      />
      <label htmlFor="colorScheme">Color: </label>
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
      <div>
        <button onClick={() => props.handleSubmit()}>Save Changes</button>
        <button>Delete Budget</button>
      </div>
    </div>
  );
}

export default EditBudgetForm;
