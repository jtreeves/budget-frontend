function BudgetsDisplay(props) {

  const budgets = props.budgetArray.map((budget, idx) => {
    return <li key={idx}>Budget {idx + 1}</li>
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
