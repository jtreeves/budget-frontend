import DefaultProfile from '../profilePages/DefaultProfile'
import UserNavigation from '../elements/UserNavigation'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'


function Profile(props) {
  const alert = useAlert()
  const { handleLogout } = props;
  const {exp, id, name, email } = props.user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  console.log(props.user)
  console.log(`this is current time ${currentTime}`)
  console.log(`this is expiration time ${expirationTime}`)


  if (currentTime >= expirationTime) {
    handleLogout();
    alert.show('Session has ended. Please log in.');
  }

  const userData = props.user ?
    (<div>
      <UserNavigation />
      <h1>Profile Page</h1>
      <div className="helper">
        <h2>User Info</h2>
        <p>
          <strong>Name:</strong> {props.user.name}
        </p>
        <p>
          <strong>Email:</strong> {props.user.email}
        </p>
        <p>
          <strong>ID:</strong> {props.user.id}
        </p>
        <div className="helper">
        <DefaultProfile />
        </div>

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
          {props.user ? userData : errorDiv() }
        </div>
      )
      }
  

// Export function
export default Profile;
