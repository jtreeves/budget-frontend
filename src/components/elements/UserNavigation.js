import { NavLink, Link } from 'react-router-dom'

import Logo from './Logo'

function UserNavigation(props) {
    return (
        <div>
            <Logo />
            <h4>Budget</h4>
            <Link className="" to ="/income">Income</Link>
            <Link className="" to ="/housing">Housing</Link>
            <Link className="" to ="/utilities">Utilities</Link>
            <Link className="" to ="/transportation">Transportation</Link>
            <Link className="" to ="/fooddrink">Food & Drink</Link>
            <Link className="" to ="/Miscellaneous">Miscellaneous</Link>
            <hr />
            <h4>Saved Budgets</h4>
        </div>
    )
}


export default UserNavigation;