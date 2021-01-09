// Import external dependencies
import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from "axios";
import jwt_decode from "jwt-decode";

// Import internal utility
import setAuthToken from "./utilities/setAuthToken";

// Import internal components
import Navigation from "./components/elements/Navigation";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";

// Import internal CSS
import "./App.css";

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

// Create private route
function PrivateRoute({ component: Component, ...rest }) {
  const user = localStorage.getItem("jwtToken");
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...rest} {...props} /> : <Redirect to="/" />;
      }}
    />
  );
}

// Create function for the main operations of the app
function App() {
  const alert = useAlert();

  //  Set initial state values
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [newUser, setNewUser] = useState(false);

  // Implement useEffect
  useEffect(() => {
    let token;
    if (!localStorage.getItem("jwtToken")) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);
  

  // Establish current user
  const nowCurrentUser = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  // Set loginEmail from login form
  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  // Set loginPassword from login form
  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  // Log in user
  const handleLogin = async () => {
    try {
      const userData = {
        email: loginEmail,
        password: loginPassword,
      };
      const currentUser = await axios.post(
        `${REACT_APP_SERVER_URL}/users/login`,
        userData
      );
      // Create token from currentUser data
      const { token } = currentUser.data;
      // Store token in localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user with decoded data
      nowCurrentUser(decoded);
      // Redirect to dashboard
      return <Redirect to="/profile/overview" />;
    } catch (error) {
      // Alert user of any errors logging in
      alert.show(`Incorrect email and/or password`);
      console.log(`LOGIN ERROR: ${error}`);
    }
  };

  // Log in user after signup
  const handleLoginAfterSignup = (email, password) => {
    setLoginEmail(email);
    setLoginPassword(password);
    setNewUser(true);
  };

  useEffect(() => {
    if (newUser) {
      handleLogin();
      setNewUser(false);
    }
  });

  // Log out user
  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
      setLoginEmail("");
      setLoginPassword("");
    }
  };

  const handleNavBars = () => {
    if (isAuthenticated) {
      return <Redirect to="/profile/overview" />;
    } else {
      return (
        <Navigation
          handleLogout={handleLogout}
          isAuth={isAuthenticated}
          handleLogin={handleLogin}
          handleLoginEmail={handleLoginEmail}
          handleLoginPassword={handleLoginPassword}
          loginEmail={loginEmail}
          loginPassword={loginPassword}
        />
      );
    }
  };

  return (
    <div className="div-container-app">
      {handleNavBars()}
      <Route
        exact
        path="/"
        render={() => {
          return <Welcome handleLoginAfterSignup={handleLoginAfterSignup} />;
        }}
      />
      <Route path="/about" component={About} />
      <PrivateRoute
        path="/profile/:ext"
        component={Profile}
        user={currentUser}
        handleLogout={handleLogout}
      />
    </div>
  );
}

// Export funtion
export default App;
