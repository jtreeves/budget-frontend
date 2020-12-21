import { Link } from 'react-router-dom'

import Logo from './Logo'

function UserNavigation(props) {
    return (
        <div>
            <Logo />
            <h4>Budget</h4>
            {/* <Link onClick={() => props.setExtension("Income")} className="" to="/profile/income">Income</Link>
            <Link onClick={() => props.setExtension("Housing")} className="" to="/profile/housing">Housing</Link>
            <Link onClick={() => props.setExtension("Utilities")} className="" to="/profile/utilities">Utilities</Link>
            <Link onClick={() => props.setExtension("Transportation")} className="" to="/profile/transportation">Transportation</Link>
            <Link onClick={() => props.setExtension("Food & Drink")} className="" to="/profile/food-drink">Food & Drink</Link>
            <Link onClick={() => props.setExtension("Miscellaneous")} className="" to="/profile/miscellaneous">Miscellaneous</Link> */}

            <a onClick={() => window.location.href="/profile/income"} className="">Income</a>
            <a onClick={() => window.location.href="/profile/housing"} className="">Housing</a>
            <a onClick={() => window.location.href="/profile/utilities"} className="">Utilities</a>
            <a onClick={() => window.location.href="/profile/transportation"} className="">Transportation</a>
            <a onClick={() => window.location.href="/profile/food-drink"} className="">Food & Drink</a>
            <a onClick={() => window.location.href="/profile/miscellaneous"} className="">Miscellaneous</a>
            
            {/* <Link className="" to="/profile/income">Income</Link>
            <Link className="" to="/profile/housing">Housing</Link>
            <Link className="" to="/profile/utilities">Utilities</Link>
            <Link className="" to="/profile/transportation">Transportation</Link>
            <Link className="" to="/profile/food-drink">Food & Drink</Link>
            <Link className="" to="/profile/miscellaneous">Miscellaneous</Link> */}
            <hr />
            <h4>Saved Budgets</h4>
        </div>
    )
}


export default UserNavigation;