function CompactTotalCategory(props) {

  const heading = () => {
    if (props.budgetKey === "income") {
      return <h3>Total Income</h3>
    } else {
      return <h3>Total Expense</h3>
    }
  }

  return (
    <div className="compact-container total">
      <div>
        {heading()}
      </div>
      <div>
        <h3 className="currency">{props.total}</h3>
      </div>
    </div>
  );
}

// Export function
export default CompactTotalCategory;
