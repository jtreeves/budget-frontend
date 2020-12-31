import { useState } from "react";
import BudgetInfo from "./BudgetInfo";
import EditBudgetForm from "../../utilities/EditBudgetForm";
import calcFunctions from "../../utilities/calcFunctions";
import UserInfoPieChart from "./UserInfoPieChart";
import axios from "axios";

function UserInfo(props) {
  const [displayForm, setDisplayForm] = useState(false);
  const [budgetName, setBudgetName] = useState(props.budget.title);
  const [colorScheme, setColorScheme] = useState(props.budget.colorScheme);
  const subTotals = calcFunctions.calcBudgetSubTotals(props.budget);
  const monthlyExpense = calcFunctions.calcExpenseTotals(props.budget);
  const weeklyExpense = (monthlyExpense / 4).toFixed(2);
  const monthlyIncome = subTotals.income;
  const weeklyIncome = (monthlyIncome / 4).toFixed(2);
  const backendUrl = process.env.REACT_APP_SERVER_URL;


  const handleSubmit = async () => {
    console.log(budgetName);
    console.log(colorScheme);
    let apiRes = await axios.put(backendUrl + "/budgets/" + props.budget._id, {
      title: budgetName,
      colorScheme: colorScheme,
      categories: props.budget.categories
    });
    console.log(apiRes);
    setDisplayForm(false);
    props.reFetchBudgets()
  };

  const infoOrForm = () => {
    if (displayForm) {
      return (
        <EditBudgetForm
          handleSubmit={handleSubmit}
          setBudgetName={setBudgetName}
          setColorScheme={setColorScheme}
          colorScheme={colorScheme}
          budgetName={budgetName}
        />
      );
    } else {
      return (
        <BudgetInfo
          setDisplayForm={setDisplayForm}
          title={props.budget.title}
          colorScheme={props.budget.colorScheme}
          _id={props.budget._id}
        />
      );
    }
  };

  const breakdown = Object.keys(subTotals).map((key, idx) => {
    return (
      <li key={idx}>
        {key}: ${subTotals[key]}
      </li>
    );
  });

  return (
    <div className="div-profile-user-info">
      <div>
        <h2>User Info</h2>
        <p>
          <strong>Name:</strong> {props.name}
        </p>
        <p>
          <strong>ID:</strong> {props.id}
        </p>
        {infoOrForm()}
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
          <ul>{breakdown}</ul>
          <UserInfoPieChart subTotals={subTotals} />
        </div>
      </div>
      <button onClick={() => props.saveBudget(props.budget)}>
        Save Budget
      </button>
    </div>
  );
}

// Export function
export default UserInfo;
