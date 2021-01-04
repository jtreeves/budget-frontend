import PrivateRoute from '../../utilities/PrivateRoute'
import DefaultProfile from '../profilePages/DefaultProfile'
import Housing from '../profilePages/Housing'
import Utilities from '../profilePages/Utilities'
import Miscellaneous from '../profilePages/Miscellaneous'
import Income from '../profilePages/Income'
import Food from '../profilePages/Food'
import Transportation from '../profilePages/Transportation'
import Entertainment from '../profilePages/Entertainment'
import CompareBudgets from '../profilePages/CompareBudgets'
import CompareLocations from '../profilePages/CompareLocations'


function ProfileRoutes(props) {
  
  // Budget Categories
  const { housing, utility, transportation, entertainment, food, misc, income } = props.budget.categories


  return (
    <div>
        <PrivateRoute
          exact
          path={"/profile/overview"}
          component={DefaultProfile}
          user={props.currentUser}
          budget={props.budget}
        />

        <PrivateRoute
          exact
          path={"/profile/compare-budgets"}
          component={CompareBudgets}
          user={props.currentUser}
          budget={props.budget}
          budgetArray={props.budgetArray}
        />

        <PrivateRoute
          exact
          path={"/profile/compare-locations"}
          component={CompareLocations}
          user={props.currentUser}
          budget={props.budget}
          budgetArray={props.budgetArray}
        />

        <PrivateRoute
          exact
          path={"/profile/housing"}
          budget={props.budget}
          component={Housing}
          user={props.currentUser}
          inputs={housing.inputs}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/entertainment"}
          budget={props.budget}
          component={Entertainment}
          user={props.currentUser}
          inputs={entertainment.inputs}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/utilities"}
          budget={props.budget}
          component={Utilities}
          user={props.currentUser}
          inputs={utility.inputs}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/food-drinks"}
          budget={props.budget}
          component={Food}
          user={props.currentUser}
          inputs={food.inputs}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/income"}
          budget={props.budget}
          component={Income}
          user={props.currentUser}
          inputs={income.inputs}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/misc"}
          budget={props.budget}
          component={Miscellaneous}
          user={props.currentUser}
          inputs={misc.inputs}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

        <PrivateRoute
          exact
          path={"/profile/transportation"}
          budget={props.budget}
          component={Transportation}
          user={props.currentUser}
          inputs={transportation.inputs}
          addBudgetInput={props.addBudgetInput}
          deleteBudgetInput={props.deleteBudgetInput}
        />

    </div>
  );
}

// Export function
export default ProfileRoutes;