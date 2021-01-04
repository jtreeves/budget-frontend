import { Link } from 'react-router-dom'
import BudgetsDisplay from '../elements/BudgetsDisplay'

function UserNavigation(props) {
  return (
    <div className="nav-user">
      <img src="https://res.cloudinary.com/alanavery/image/upload/v1609718928/kaleidoscope/kaleidoscope-logo-primary-black_lphgwi.png" alt="Kaleidoscope logo"/>
      <ul>
        <li className="link1">
          <Link className="nav-links" to="/profile/overview">
            Overview
          </Link>
        </li>
        <li className="link2">
          <Link className="nav-links" to="/profile/housing">
            Housing
          </Link>
        </li>
        <li className="link2">
          <Link className="nav-links" to="/profile/utilities">
            Utilities
          </Link>
        </li>
        <li className="link2">
          <Link className="nav-links" to="/profile/food-drinks">
            Food & Drink
          </Link>
        </li>
        <li className="link2">
          <Link className="nav-links" to="/profile/transportation">
            Transportation
          </Link>
        </li>
        <li className="link2">
          <Link className="nav-links" to="/profile/entertainment">
            Entertainment
          </Link>
        </li>
        <li className="link2">
          <Link className="nav-links" to="/profile/misc">
            Miscellaneous
          </Link>
        </li>
        <li className="link1">
          <Link className="nav-links" to="/profile/compare">
            Comparison
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/compare-locations">
            Compare Locations
          </Link>
        </li>
      </ul>
      <BudgetsDisplay switchBudgets={props.switchBudgets} loadNewBudget={props.loadNewBudget} user={props.user} budgetArray={props.budgetArray}/>
    </div>
  );
}

export default UserNavigation;
