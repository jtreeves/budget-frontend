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
  document.onmousedown = (e) => {
    if (!loginVisible && e.target.id === 'nav-login') {
      setLoginVisible(true)
    } else if (loginVisible && !e.target.closest('#div-login')) {
      setLoginVisible(false)
    }
  }
  
  return (
    <nav className="nav-public">
      <Link to="/"><img src="https://res.cloudinary.com/alanavery/image/upload/v1609691759/kaleidoscope/kaleidoscope-logo-primary-white_cacix8.png" alt="Kaleidoscope logo"/></Link>
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
              <span id="nav-login">Log In</span>
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
          handleLogin={props.handleLogin}
          handleLoginEmail={props.handleLoginEmail}
          handleLoginPassword={props.handleLoginPassword}
          loginEmail={props.loginEmail}
          loginPassword={props.loginPassword}
        />
      </CSSTransition>
    </nav>
  );
}

// Export function
export default Navigation;
