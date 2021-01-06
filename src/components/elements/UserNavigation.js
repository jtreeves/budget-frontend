import { Link } from 'react-router-dom'
import BudgetsDisplay from '../elements/BudgetsDisplay'

function UserNavigation(props) {
  return (
    <div className="nav-user">
      <div className="div-logo-nav-button">
        <img src="https://res.cloudinary.com/alanavery/image/upload/v1609718928/kaleidoscope/kaleidoscope-logo-primary-black_lphgwi.png" alt="Kaleidoscope logo"/>
        <button className="button-mobile-nav" onClick={() => {
          let mobileNav = document.querySelector('.div-nav-links');
          if (!mobileNav.classList.contains('hidden')) {
            mobileNav.classList.add('hidden');
          } else {
            mobileNav.classList.remove('hidden');
          }
          console.log(mobileNav);
        }}>Nav</button>
      </div>
      <div className="div-nav-links hidden">
        <ul>
          <li className="link1">
            <Link className="nav-links" to="/profile/overview">
              Overview
            </Link>
          </li>
          <li className="link1">
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
          <li className="link1 link-compare">
            <Link onClick={props.reFetchBudgets} className="nav-links" to="/profile/compare-budgets">
              Compare Budgets
            </Link>
          </li>
          <li className="link2 link-compare">
            <Link className="nav-links" to="/profile/compare-locations">
              Compare Locations
            </Link>
          </li>
        </ul>
        <BudgetsDisplay colorsAvailable={props.colorsAvailable} reFetchBudgets={props.reFetchBudgets} switchBudgets={props.switchBudgets} loadNewBudget={props.loadNewBudget} user={props.user} budgetArray={props.budgetArray}/>
      </div>
    </div>
  );
}

export default UserNavigation;
