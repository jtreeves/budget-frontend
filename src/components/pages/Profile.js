import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

// Component Imports
import UserInfo from "../elements/UserInfo";
import ProfileRoutes from "../elements/ProfileRoutes";
import { useState } from "react";
import calcSubTotals from "../../utilities/calcSubTotals";

// data import (Developing Only)
import budgetSeed from "../../seeders/futureSeeder";

function Profile(props) {
  // Variables and Props
  const alert = useAlert();
  const { handleLogout } = props;
  const { exp, id, name, email } = props.user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  // State
  const [budget, setBudget] = useState(budgetSeed);

  // Budget state funcitons
  const addBudgetInput = (category, input) => {
    let newInput = {};
    newInput[input.type] = parseFloat(input.price);
    setBudget((prevBudget) => ({
      ...prevBudget,
      [category]: [newInput, ...prevBudget[category]],
    }));
    console.log(newInput);
  };

  // Session Auto-Logout
  if (currentTime >= expirationTime) {
    handleLogout();
    alert.show("Session has ended. Please log in.");
  }

  // Success Display
  const userData = props.user ? (
    <div className="div-profile-page">
      {/* <h1>Profile Page</h1> */}

      <UserInfo
        name={name}
        email={email}
        id={id}
        budget={budget}
      />

      <div className="div-profile-workspace">
        <ProfileRoutes addBudgetInput={addBudgetInput} budget={budget} />
      </div>
    </div>
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
