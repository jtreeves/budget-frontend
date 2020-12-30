function CompactTotal(props) {
  return (
    <div className="compact-container total">
      <div>
        <h3>Total Expense</h3>
      </div>
      <div>
        <h3 className="currency">${props.totalExpense}</h3>
      </div>
      <div>
        <h3>Total Income</h3>
      </div>
      <div>
        <h3 className="currency">${props.totalIncome}</h3>
      </div>
    </div>
  );
}

// Export function
export default CompactTotal;
