// Create function
function CompactDisplayCategory(props) {
  
  return (
    <div className="compact-container">
      <div>
        <h3>{Object.keys(props.input)}</h3>

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
