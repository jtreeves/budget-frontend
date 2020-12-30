

// Create function
function CompactDisplayCategory(props) {
  return (
    <div className="compact-container">
      <div>
        <h3>{props.inputName}</h3>
        <button
          className="delete-tag"
          onClick={() => {
            props.deleteBudgetInput(props.budgetKey, props.inputName)
          }}
        >
          Delete
        </button>
      </div>

      <div>
        <h3>${props.inputValue}</h3>
        <h3>Per Month</h3>
      </div>
    </div>
  );
}

// Export function
export default CompactDisplayCategory;
