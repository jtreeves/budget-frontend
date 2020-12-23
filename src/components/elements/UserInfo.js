import calcTotal from '../../utilities/calcTotal'

function UserInfo(props) {

  const monthlyExpense = calcTotal(props.budget)
  const weeklyExpense = (monthlyExpense / 4).toFixed(2)

  const monthlyIncome = (props.totals.income)
  const weeklyIncome = (monthlyIncome / 4).toFixed(2)

  const breakdown = Object.keys(props.totals).map((key, idx) => {
    return <li key={idx}>{key}: ${props.totals[key]}</li>
  })

  return (
    <div className="div-profile-user-info">
      <div>
        <h2>User Info</h2>
        <p>
          <strong>Name:</strong> {props.name}
        </p>
        <p>
          <strong>Email:</strong> {props.email}
        </p>
        <p>
          <strong>ID:</strong> {props.id}
        </p>
        
      </div>
      
      <div>
        <h2>Summary</h2>
        <div className="div-profile-workspace">
          <h2>Monthly</h2>
          <h4>Expense: ${monthlyExpense}</h4>
          <h4>Income: ${monthlyIncome}</h4>
          
          <h2>Weekly</h2>
          <h4>Expense: ${weeklyExpense}</h4>
          <h4>Income: ${weeklyIncome}</h4>
          <h4>_______</h4>
          <h4>Breakdown</h4>
          <ul>
            {breakdown}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Export function
export default UserInfo;
