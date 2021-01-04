import { Link } from 'react-router-dom'
import BudgetsDisplay from '../elements/BudgetsDisplay'

function UserNavigation(props) {
  return (
    <div className="nav-user">
      <p>Kaleidoscope</p>
      <ul>
        
        <li>
          <Link className="nav-links" to="/profile/housing">
            Housing
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/utilities">
            Utilities
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/transportation">
            Transportation
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/food-drinks">
            Food & Drink
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/entertainment">
            Entertainment
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/misc">
            Miscellaneous
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/overview">
            Overview
          </Link>
        </li>
        <li>
          <hr />
        </li>
        <li>
          <Link className="nav-links" to="/profile/compare-budgets">
            Compare Budgets
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/compare-locations">
            Compare Locations
          </Link>
        </li>
      </ul>
      <button onClick={props.handleLogout}>Logout</button>
      <BudgetsDisplay switchBudgets={props.switchBudgets} loadNewBudget={props.loadNewBudget} user={props.user} budgetArray={props.budgetArray}/>
    </div>
  );
}

export default UserNavigation;
