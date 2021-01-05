import { useState, useEffect } from "react";
import BudgetInfo from "./BudgetInfo";
import DeleteBudgetChoices from "./DeleteBudgetChoices";
import EditBudgetForm from "../../utilities/EditBudgetForm";
import EditUserForm from "../../utilities/EditUserForm";
import calcFunctions from "../../utilities/calcFunctions";
import UserInfoPieChart from "./UserInfoPieChart";
import axios from "axios";

function UserInfo(props) {
  const [displayForm, setDisplayForm] = useState(false);
  const [deletePressed, setDeletePressed] = useState(false);
  const [budgetName, setBudgetName] = useState(props.budget.title);
  const [colorScheme, setColorScheme] = useState(props.budget.colorScheme);
  const [location, setLocation] = useState(props.budget.location);
  const [income, setIncome] = useState(props.budget.income);
  const [userName, setUserName] = useState(props.name)
  const [userDeletePressed, setUserDeletePressed] = useState(false);
  const [editNamePressed, setEditNamePressed] = useState(false);
  const subTotals = calcFunctions.calcBudgetSubTotals(props.budget);
  const monthlyExpense = calcFunctions.formatCurrency(calcFunctions.calcExpenseTotals(props.budget));
  const monthlyExpenseNum = calcFunctions.calcExpenseTotals(props.budget);
  const monthlyIncome = calcFunctions.formatCurrency(props.budget.income / 12);
  const monthlyIncomeNum = props.budget.income / 12;
  const budgetDifference = calcFunctions.formatCurrency(monthlyIncomeNum - monthlyExpenseNum);
  const backendUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    setDisplayForm(false);
    setBudgetName(props.budget.title);
    setIncome(props.budget.income);
    setLocation(props.budget.location);
    setColorScheme(props.budget.colorScheme);
  }, [props.budget]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    let apiRes = await axios.put(backendUrl + "/budgets/" + props.budget._id, {
      title: budgetName,
      colorScheme: colorScheme,
      categories: props.budget.categories,
      location: location,
      income: income
    });
    setDisplayForm(false);
    props.reFetchBudgets(props.budget);
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault()
    let apiRes = await axios.put(backendUrl + "/users/" + props.id, {
      newName: userName
    });
    console.log(apiRes)
    setEditNamePressed(false);
    // reFetch User Name
  }

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

  const userNameButtons = () => {
    if(!editNamePressed) {
      return(
        <div className="div-user-delete">
          <button className="button-small" onClick={() => setEditNamePressed(true)}>
            Edit Name
          </button>
        </div>
      )
    } else if (editNamePressed) {
      return (
        <div className="div-user-delete-confiirm">
          <EditUserForm 
          userName={userName}
          setUserName={setUserName}
          />
          <p>Are you sure?</p>
          <div>
            <button className="button-small button-left" onClick={(e) => handleUserSubmit(e)}>
              Yes
            </button>
            <button className="button-small" onClick={() => setEditNamePressed(false)}>
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
          income={income}
          setIncome={setIncome}
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
          income={props.budget.income}
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

  const provideColorCode = (colorName) => {
    switch (colorName) {
      case 'Magenta':
        return '#9f2e71';
      case 'Red':
        return '#aa0100';
      case 'Orange':
        return '#f68200';
      case 'Green':
        return '#367724';
      case 'Blue':
        return '#116b90';
      case 'Purple':
        return '#5e235f';
    }
  }

  return (
    <div className="div-user-info">
      <div className="div-user-name">
        <h4>{props.name}</h4>
        <button className="button-small" onClick={props.handleLogout}>Log Out</button>
      </div>

      {userNameButtons()}
      {userInfoButtons()}

      <div className="div-current-budget">
        <div className="div-budget-name" style={{ backgroundColor: provideColorCode(props.budget.colorScheme) }}>
          <h2>{props.budget.title}</h2>
        </div>
        <div className="div-budget-summary">
          <UserInfoPieChart subTotals={subTotals} income={monthlyIncomeNum} />
          <h4>Monthly Income: {monthlyIncome}</h4>
          <h4>Total Expenses: {monthlyExpense}</h4>
          <h3>{budgetDifference}</h3>
          <p>left over each month</p>
          {infoOrForm()}
        </div>
      </div>
    </div>
  );
}

// Export function
export default UserInfo;
