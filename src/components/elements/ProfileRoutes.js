import PrivateRoute from '../../utilities/PrivateRoute'
import DefaultProfile from '../profilePages/DefaultProfile'
import Housing from '../profilePages/Housing'
import Utilities from '../profilePages/Utilities'
import Miscellaneous from '../profilePages/Miscellaneous'
import Income from '../profilePages/Income'
import FoodAndDrinks from '../profilePages/FoodAndDrinks'
import Transportation from '../profilePages/Transportation'


function ProfileRoutes(props) {
  return (
    <div>

        <PrivateRoute
          exact
          path={"/profile"}
          component={DefaultProfile}
          user={props.currentUser}
        />

        <PrivateRoute
          exact
          path={"/profile/housing"}
          component={Housing}
          user={props.currentUser}
        />

        <PrivateRoute
          exact
          path={"/profile/utilities"}
          component={Utilities}
          user={props.currentUser}
        />

        <PrivateRoute
          exact
          path={"/profile/food-drinks"}
          component={FoodAndDrinks}
          user={props.currentUser}
        />

        <PrivateRoute
          exact
          path={"/profile/income"}
          component={Income}
          user={props.currentUser}
        />

        <PrivateRoute
          exact
          path={"/profile/misc"}
          component={Miscellaneous}
          user={props.currentUser}
        />

        <PrivateRoute
          exact
          path={"/profile/transportation"}
          component={Transportation}
          user={props.currentUser}
        />

    </div>
  );
}

// Export function
export default ProfileRoutes;