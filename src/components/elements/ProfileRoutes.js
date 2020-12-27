import PrivateRoute from '../../utilities/PrivateRoute'
import DefaultProfile from '../profilePages/DefaultProfile'
import Housing from '../profilePages/Housing'
import Utilities from '../profilePages/Utilities'
import Miscellaneous from '../profilePages/Miscellaneous'
import Income from '../profilePages/Income'
import FoodAndDrinks from '../profilePages/FoodAndDrinks'
import Transportation from '../profilePages/Transportation'


function ProfileRoutes(props) {
  
  // Budget Categories
  const { income, housing, foodAndDrinks, misc, transportation, utilities } = props.budget

  return (
    <div>
        <PrivateRoute
          exact
          path={"/profile"}
          component={DefaultProfile}
          user={props.currentUser}
          budget={props.budget}
        />

        <PrivateRoute
          exact
          path={"/profile/housing"}
          component={Housing}
          user={props.currentUser}
          inputs={housing}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/utilities"}
          component={Utilities}
          user={props.currentUser}
          inputs={utilities}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/food-drinks"}
          component={FoodAndDrinks}
          user={props.currentUser}
          inputs={foodAndDrinks}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/income"}
          component={Income}
          user={props.currentUser}
          inputs={income}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/misc"}
          component={Miscellaneous}
          user={props.currentUser}
          inputs={misc}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/transportation"}
          component={Transportation}
          user={props.currentUser}
          inputs={transportation}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

    </div>
  );
}

// Export function
export default ProfileRoutes;