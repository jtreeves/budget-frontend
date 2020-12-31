function DeleteBudgetChoices(props) {
  
  const deleteConfirmed = () => {
    props.setDeletePressed(false)
    props.deleteBudget(props._id)
  }

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
      <button onClick={() => deleteConfirmed()}>Yes, Delete</button>
      <button onClick={() => props.setDeletePressed(false)}>No, Cancel</button>
    </div>
  );
}

export default DeleteBudgetChoices;
