import { useState, useEffect } from "react";
import BudgetInfo from "./BudgetInfo";
import DeleteBudgetChoices from "./DeleteBudgetChoices";
import EditBudgetForm from "../../utilities/EditBudgetForm";
import calcFunctions from "../../utilities/calcFunctions";
import UserInfoPieChart from "./UserInfoPieChart";
import axios from "axios";

function UserInfo(props) {
  const [displayForm, setDisplayForm] = useState(false);
  const [deletePressed, setDeletePressed] = useState(false);
  const [budgetName, setBudgetName] = useState(props.budget.title);
  const [colorScheme, setColorScheme] = useState(props.budget.colorScheme);
  const [location, setLocation] = useState(props.budget.location);
  const subTotals = calcFunctions.calcBudgetSubTotals(props.budget);
  const monthlyExpense = calcFunctions.calcExpenseTotals(props.budget);
  const weeklyExpense = (monthlyExpense / 4).toFixed(2);
  const monthlyIncome = subTotals.income;
  const weeklyIncome = (monthlyIncome / 4).toFixed(2);
  const backendUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    setDisplayForm(false);
    setBudgetName(props.budget.title);
    setColorScheme(props.budget.colorScheme);
  }, [props.budget]);

  const handleSubmit = async () => {
    let apiRes = await axios.put(backendUrl + "/budgets/" + props.budget._id, {
      title: budgetName,
      colorScheme: colorScheme,
      categories: props.budget.categories,
      location: location
    });
    setDisplayForm(false);
    props.reFetchBudgets(props.budget);
  };

  const infoOrForm = () => {
    if (displayForm && !deletePressed) {
      return (
        <EditBudgetForm
          location={location}
          setLocation={setLocation}
          setDisplayForm={setDisplayForm}
          handleSubmit={handleSubmit}
          setBudgetName={setBudgetName}
          setColorScheme={setColorScheme}
          colorScheme={colorScheme}
          budgetName={budgetName}
          _id={props.budget._id}
        />
      );
    } else if (deletePressed) {
      return (
        <DeleteBudgetChoices
          deleteBudget={props.deleteBudget}
          setDeletePressed={setDeletePressed}
          title={props.budget.title}
          colorScheme={props.budget.colorScheme}
          _id={props.budget._id}
          budget={props.budget}
        />
      );
    } else {
      return (
        <BudgetInfo
          budgetArray={props.budgetArray}
          setDisplayForm={setDisplayForm}
          title={props.budget.title}
          colorScheme={props.budget.colorScheme}
          location={props.budget.location}
          _id={props.budget._id}
          setDeletePressed={setDeletePressed}
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
        <div className="helper">{infoOrForm()}</div>
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
    </div>
  );
}

// Export function
export default UserInfo;
