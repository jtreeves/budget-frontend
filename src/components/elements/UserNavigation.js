import { Link } from 'react-router-dom'

function UserNavigation(props) {
  return (
    <div className="nav-user">
      {/* <Logo /> */}
      <p>Kaleidoscope</p>
      <ul>
        <li>
          <Link className="nav-links" to="/profile/income">
            Income
          </Link>
        </li>
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
          <Link className="nav-links" to="/profile/misc">
            Miscellaneous
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/profile/overview">
            Overview
          </Link>
        </li>
      </ul>
      <button onClick={props.handleLogout}>Logout</button>
      {/* Create loop to do the following:
            if no saved budgets display "No Saved Budgets"
            else saved budgets > 0 display list of budgets as links
            to specified budgets.
            */}
    </div>
  );
}

export default UserNavigation;
