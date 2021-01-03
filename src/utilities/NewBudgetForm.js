function NewBudgetForm(props) {

  const dataOptions = props.copyDataChoices.map((budget, idx) => {
    return <option key={idx} value={budget._id}>{budget.title}</option>
  })
  return (
    <div>
      <input type="text" placeholder="Budget Name" value={props.title} onChange={(e) => props.setName(e.target.value)}/>
      <label htmlFor="colorScheme">Color: </label>
      <select value={props.colorScheme} name="colorScheme" id="colorScheme" onChange={(e) => props.setColor(e.target.value)}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <label htmlFor="copyDataFrom">Copy Data From: </label>
      <select value={props.copyDataFrom} name="copyDataFrom" id="copyDataFrom" onChange={(e) => props.setCopyDataFrom(e.target.value)}>
        <option value="None">None</option>
        {dataOptions}
      </select>
      <button onClick={() => props.setFormDisplayed(false)}>Cancel</button>
    </div>
  );
}

export default NewBudgetForm;
