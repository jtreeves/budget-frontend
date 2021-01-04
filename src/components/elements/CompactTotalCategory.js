function CompactTotalCategory(props) {
  return (
    <div className="compact-container total">
      <div>
        <h3>Total Expense</h3>
      </div>
      <div>
        <h3 className="currency">{props.total}</h3>
      </div>
    </div>
  );
}

// Export function
export default CompactTotalCategory;
