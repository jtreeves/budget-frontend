function DeleteBudgetChoices(props) {
  
  const deleteConfirmed = () => {
    props.setDeletePressed(false)
    props.deleteBudget(props._id)
  }

  return (
    <div className="div-budget-delete-confirm">
      <p>Are you sure?</p>
      <button className="button-small button-left" onClick={() => deleteConfirmed()}>Delete</button>
      <button className="button-small" onClick={() => props.setDeletePressed(false)}>Cancel</button>
    </div>
  )
}

export default DeleteBudgetChoices
