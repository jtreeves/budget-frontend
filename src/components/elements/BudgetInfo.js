function BudgetInfo(props) {
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

export default BudgetInfo;
