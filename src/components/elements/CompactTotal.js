function CompactTotal(props) {
  return (
    <div className="compact-container-total">
      <h3>Total Expenses</h3>
      <p className="currency">${props.totalExpense}</p>
    </div>
  );
}

// Export function
export default CompactTotal;
