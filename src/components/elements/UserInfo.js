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
  const [userDeletePressed, setUserDeletePressed] = useState(false);
  const subTotals = calcFunctions.calcBudgetSubTotals(props.budget);
  const monthlyExpense = calcFunctions.formatCurrency(calcFunctions.calcExpenseTotals(props.budget));
  const monthlyExpenseNum = calcFunctions.calcExpenseTotals(props.budget);
  const monthlyIncome = calcFunctions.formatCurrency(subTotals.income);
  const monthlyIncomeNum = subTotals.income;
  const budgetDifference = calcFunctions.formatCurrency(monthlyIncomeNum - monthlyExpenseNum);
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

  const userInfoButtons = () => {
    if (!userDeletePressed) {
      return (
        <div className="div-user-delete">
          <button className="button-small" onClick={() => setUserDeletePressed(true)}>
            Delete Account
          </button>
        </div>
      )
    } else if (userDeletePressed) {
      return (
        <div className="div-user-delete-confirm">
          <p>Are you sure?</p>
          <div>
            <button className="button-small button-left" onClick={deleteUser}>
              Delete
            </button>
            <button className="button-small" onClick={() => setUserDeletePressed(false)}>
              Cancel
            </button>
          </div>
        </div>
      )
    }
  }

  const deleteUser = async () => {
    try {
      props.handleLogout();
      await axios.delete(backendUrl + "/users/" + props.id);
    } catch (err) {
      console.log(err);
    }
  }

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
    <div className="div-user-info">
      <div className="div-user-name">
        <h4>{props.name}</h4>
        <button className="button-small" onClick={props.handleLogout}>Log Out</button>
      </div>

      {userInfoButtons()}

      <div className="div-budget-summary">
        <h2>{props.budget.title}</h2>
        <UserInfoPieChart subTotals={subTotals} />
        <h4>Income: {monthlyIncome}</h4>
        <h4>Total Expenses: {monthlyExpense}</h4>
        <h3>{budgetDifference}</h3>
        <p>left over each month</p>
        {infoOrForm()}
      </div>
    </div>
  );
}

// Export function
export default UserInfo;
