function BudgetsDisplay(props) {

  const budgets = props.budgetArray.map((budget, idx) => {
    return <li key={idx}>{budget._id}</li>
  })
  return (
    <div>
      <p>Budgets</p>
      <ul>
        {budgets}
      </ul>
    </div>
  );
}

export default BudgetsDisplay;
