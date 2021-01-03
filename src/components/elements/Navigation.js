// Import external dependency
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Login from '../pages/Login';

// Create function
function Navigation(props) {
  // Set state
  const [loginVisible, setLoginVisible] = useState(false);

  // Toggle login form visibility
  const toggleLogin = () => {
    if (!loginVisible) {
      setLoginVisible(true);
    } else {
      setLoginVisible(false);
    }
  }

  document.onmousedown = (e) => {
    if (!loginVisible && e.target.id === 'nav-login') {
      setLoginVisible(true)
    } else if (loginVisible && !e.target.closest('#div-login')) {
      setLoginVisible(false)
    }
  }
  
  return (
    <nav className="nav-public">
      <Link to="/">Kaleidoscope</Link>
      <ul>
        <li>
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>

        {props.isAuth ? (
          <>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <span onClick={props.handleLogout}>Logout</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <span id="nav-login">Login</span>
            </li>
          </>
        )}
      </ul>
      <CSSTransition
        in={loginVisible}
        timeout={200}
        classNames="fade"
        unmountOnExit
        exit={!loginVisible}
      >
        <Login
          nowCurrentUser={props.nowCurrentUser}
          user={props.user}
        />
      </CSSTransition>
    </nav>
  );
}

// Export function
export default Navigation;
