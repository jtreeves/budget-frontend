function EditBudgetForm(props) {
  return (
    <div>
      <h2>Current Budget</h2>
      <p>
        <strong>Title:</strong>
        <input
          type="text"
          value={props.budgetName}
          onChange={(e) => props.setBudgetName(e.target.value)}
        />
      </p>
      <p>
        <strong>Color Scheme:</strong>
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
      </p>
      <p>
        <strong>ID:</strong> {props._id}
      </p>
      <div>
        <button onClick={() => props.handleSubmit()}>Save Changes</button>
        <button onClick={() => props.setDisplayForm(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default EditBudgetForm;
