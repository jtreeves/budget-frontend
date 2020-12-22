import { Link } from 'react-router-dom'

import Logo from './Logo'

function UserNavigation(props) {
    return (
        <div>
            <Logo />
            <h4>Budget</h4>

            <Link className="nav-links" to="/profile/income">Income</Link>
            <Link className="nav-links" to="/profile/housing">Housing</Link>
            <Link className="nav-links" to="/profile/utilities">Utilities</Link>
            <Link className="nav-links" to="/profile/transportation">Transportation</Link>
            <Link className="nav-links" to="/profile/food-drinks">Food & Drink</Link>
            <Link className="nav-links" to="/profile/misc">Miscellaneous</Link>
            <Link className="nav-links" to="/profile">Overview</Link>

            <hr />
            <h4>Saved Budgets</h4>
            {/* Create loop to do the following:
            if no saved budgets display "No Saved Budgets"
            else saved budgets > 0 display list of budgets as links
            to specified budgets.
            */}
        </div>
    )
}


export default UserNavigation;