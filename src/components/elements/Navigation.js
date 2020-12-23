// Import external dependency
import { NavLink, Link } from 'react-router-dom';

// Create function
function Navigation(props) {
  return (
    <nav className="nav-public">
      <Link to="/">Kaleidoscope</Link>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
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
              <NavLink to="/signup">Create Account</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

// Export function
export default Navigation;
