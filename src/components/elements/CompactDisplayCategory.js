// Create function
function CompactDisplayCategory(props) {
  return (
    <div className="compact-container">
      <div>
        <h3>{Object.keys(props.input)}</h3>
        <a
          className="delete-tag"
          onClick={() => {
            props.deleteBudgetInput(props.budgetKey, props.input, props.index)
          }}
        >
          Delete
        </a>
      </div>

      <div>
        <h3>${Object.values(props.input)}</h3>
        <h3>Per Month</h3>
      </div>
    </div>
  );
}

// Export function
export default CompactDisplayCategory;
