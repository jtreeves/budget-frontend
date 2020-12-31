function BudgetInfo(props) {

  if (props.budgetArray.length > 1) {
    return (
      <div>
        <h2>Current Budget</h2>
        <p>
          <strong>Title:</strong> {props.title}
        </p>
        <p>
          <strong>Color Scheme:</strong> {props.colorScheme}
        </p>
        <p>
          <strong>ID:</strong> {props._id}
        </p>
        <button onClick={() => props.setDisplayForm(true)}>Edit Budget</button>
        <button onClick={() => props.setDeletePressed(true)}>Delete Budget</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Current Budget</h2>
        <p>
          <strong>Title:</strong> {props.title}
        </p>
        <p>
          <strong>Color Scheme:</strong> {props.colorScheme}
        </p>
        <p>
          <strong>ID:</strong> {props._id}
        </p>
        <button onClick={() => props.setDisplayForm(true)}>Edit Budget</button>
      </div>
    );
  }

}

export default BudgetInfo;
