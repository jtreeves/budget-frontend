function BudgetInfo(props) {

  if (props.budgetArray.length > 1) {
    return (
      <div>
        <button className="button-small button-left" onClick={() => props.setDisplayForm(true)}>Edit</button>
        <button className="button-small" onClick={() => props.setDeletePressed(true)}>Delete</button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="button-small" onClick={() => props.setDisplayForm(true)}>Edit</button>
      </div>
    );
  }

}

export default BudgetInfo;
