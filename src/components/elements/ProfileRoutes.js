import { useState } from 'react';

import PrivateRoute from '../../utilities/PrivateRoute'
import DefaultProfile from '../profilePages/DefaultProfile'
import Housing from '../profilePages/Housing'
import Utilities from '../profilePages/Utilities'
import Miscellaneous from '../profilePages/Miscellaneous'
import Income from '../profilePages/Income'
import FoodAndDrinks from '../profilePages/FoodAndDrinks'
import Transportation from '../profilePages/Transportation'


function ProfileRoutes(props) {
  
  // Budget Components
  const { income, housing, foodAndDrinks, misc, transportation, utilities } = props.budget

  // const [incomeInputs, setIncomeInputs] = useState(income);
  // const [foodAndDrinkInputs, setFoodAndDrinkInputs] = useState(foodAndDrinks);
  // const [housingInputs, setHousingInputs] = useState(housing);
  // const [miscInputs, setMiscInputs] = useState(misc);
  // const [transportationInputs, setTransportationInputs] = useState(transportation);
  // const [utilitiesInputs, setUtilitiesInputs] = useState(utilities);


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
          updateBudget={props.updateBudget}
          budget={props.budget}
        />

        <PrivateRoute
          exact
          path={"/profile/utilities"}
          component={Utilities}
          user={props.currentUser}
          inputs={utilities}
        />

        <PrivateRoute
          exact
          path={"/profile/food-drinks"}
          component={FoodAndDrinks}
          user={props.currentUser}
          inputs={foodAndDrinks}
        />

        <PrivateRoute
          exact
          path={"/profile/income"}
          component={Income}
          user={props.currentUser}
          inputs={income}
        />

        <PrivateRoute
          exact
          path={"/profile/misc"}
          component={Miscellaneous}
          user={props.currentUser}
          inputs={misc}
        />

        <PrivateRoute
          exact
          path={"/profile/transportation"}
          component={Transportation}
          user={props.currentUser}
          inputs={transportation}
        />

    </div>
  );
}

// Export function
export default ProfileRoutes;