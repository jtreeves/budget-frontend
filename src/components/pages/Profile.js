import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

// Component Imports
import UserInfo from '../elements/UserInfo'
import ProfileRoutes from '../elements/ProfileRoutes'


function Profile(props) {
  const alert = useAlert()
  const { handleLogout } = props;
  const {exp, id, name, email } = props.user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  if (currentTime >= expirationTime) {
    handleLogout();
    alert.show('Session has ended. Please log in.');
  }

  const userData = props.user ?
    (<div className="div-profile-page">
      
//       <h1>Profile Page</h1>

      <UserInfo name={props.user.name} email={props.user.email} id={props.user.id}/>

      <div className="div-profile-workspace">

       <ProfileRoutes />
      </div>
    </div>) : <h4>Loading...</h4>

const errorDiv = () => {
  return (
    <div> 
      <h3>Please <Link to="/login">login</Link> to view this page</h3>
    </div>
  );
  };

  return (
    <div>
      {props.user ? userData : errorDiv()}
    </div>
  )
}

// Export function
export default Profile;


