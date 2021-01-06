function BudgetInfo(props) {

  if (props.budgetArray.length > 1) {
    return (
      <div className="subsection-buttons">
        <button className="button-small button-left" onClick={() => props.setDisplayForm(true)}>Edit</button>
        <button className="button-small" onClick={() => props.setDeletePressed(true)}>Delete</button>
      </div>
    );
  } else {
    return (
      <div className="subsection-buttons">
        <button className="button-small" onClick={() => props.resetInputFields()}>Edit</button>
      </div>
    );
  }

}

export default BudgetInfo;
