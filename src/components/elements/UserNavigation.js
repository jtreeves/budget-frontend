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
        </div>
    )
}


export default UserNavigation;