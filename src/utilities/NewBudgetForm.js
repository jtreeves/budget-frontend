function NewBudgetForm(props) {

  return (
    <div>
      <input type="text" placeholder="Budget Name" value={props.title} onChange={(e) => props.setName(e.target.value)}/>
      <label htmlFor="colorScheme">Color: </label>
      <select value={props.colorScheme} name="colorScheme" id="colorScheme" onChange={(e) => props.setColor(e.target.value)}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <button onClick={() => props.setFormDisplayed(false)}>Cancel</button>
    </div>
  );
}

export default NewBudgetForm;
