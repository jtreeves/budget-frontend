import SimplePieChart from './SimplePieChart';

// Create function
function CompactDisplayCategory(props) {
  return (
    <div className="compact-container">
      <div>
        <h3>{Object.keys(props.input)}</h3>
        <button
          className="delete-tag"
          onClick={() => {
            props.deleteBudgetInput(props.budgetKey, props.index)
          }}
        >
          Delete
        </button>
      </div>

      <div>
        <h3>${Object.values(props.input)}</h3>
        <h3>Per Month</h3>
      </div>
      <SimplePieChart />
    </div>
  );
}

// Export function
export default CompactDisplayCategory;
