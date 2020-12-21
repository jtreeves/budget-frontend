import { NavLink, Link } from 'react-router-dom'

import Logo from './Logo'

function UserNavigation(props) {
    return (
        <div>
            <Logo />
            <h4>Budget</h4>
            {/* May convert to NavLink later */}
            <Link className="" to ="/income">Income</Link>
            <Link className="" to ="/housing">Housing</Link>
            <Link className="" to ="/utilities">Utilities</Link>
            <Link className="" to ="/transportation">Transportation</Link>
            <Link className="" to ="/fooddrink">Food & Drink</Link>
            <Link className="" to ="/Miscellaneous">Miscellaneous</Link>
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