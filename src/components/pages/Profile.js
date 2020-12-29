import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from "axios";

// Component Imports
import UserInfo from "../elements/UserInfo";
import UserNavigation from '../elements/UserNavigation'
import ProfileRoutes from "../elements/ProfileRoutes";
import { useState, useEffect } from "react";

// data import (Developing Only)
// import budgetSeed2 from "../../seeders/futureSeeder";

function Profile(props) {
  // Variables and Props
  const alert = useAlert();
  const { handleLogout } = props;
  const { exp, id, name, email } = props.user;
  const backendUrl = process.env.REACT_APP_SERVER_URL;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  // API functions

  useEffect(() => {
    async function fetchBudgets() {
      if (props.user) {
        let apiRes = await axios.get(backendUrl + "/budgets/all/" + id);
        let budgets = await apiRes.data.budgets;
        setBudget(budgets[0]);
        setBudgetArray(budgets);
      }
    }
    try {
      fetchBudgets();
    } catch (error) {
      console.log(error);
    }
  }, [backendUrl, id, props.user]);

  // State
  const [budget, setBudget] = useState(null);
  const [budgetArray, setBudgetArray] = useState(null);

  // Budget state funcitons
  const addBudgetInput = (budgetKey, newInput) => {
    // This makes a deep copy of the budget
    let budgetCopy = JSON.parse(JSON.stringify(budget));
    // Now you can edit budgetCopy without changing budget
    budgetCopy.categories[budgetKey].inputs[newInput.inputName] =
      newInput.inputValue;
    setBudget(budgetCopy);
  };

  const deleteBudgetInput = (budgetKey, inputKey) => {
    // This makes a deep copy of the budget
    let budgetCopy = JSON.parse(JSON.stringify(budget));
    // Now you can edit budgetCopy without changing budget
    delete budgetCopy.categories[budgetKey].inputs[inputKey];
    setBudget(budgetCopy);
  };

  // Session Auto-Logout
  if (currentTime >= expirationTime) {
    handleLogout();
    alert.show("Session has ended. Please log in.");
  }

  // Success Display
  const userData =
    props.user && budget ? (
      <>
        <UserNavigation handleLogout={handleLogout} budgetArray={budgetArray}/>
        <div className="div-profile-page">
          <UserInfo name={name} email={email} id={id} budget={budget} />

          <div className="div-profile-workspace">
            <ProfileRoutes
              deleteBudgetInput={deleteBudgetInput}
              addBudgetInput={addBudgetInput}
              budget={budget}
            />
          </div>
        </div>

      </>
    ) : (
      <h4>Loading...</h4>
    );

  // Error Display
  const errorDiv = () => {
    return (
      <div>
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  // Profile Return
  return <>{props.user ? userData : errorDiv()}</>;
}

// Export function
export default Profile;
