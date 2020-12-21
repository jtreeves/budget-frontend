
import DefaultProfile from '../elements/DefaultProfile'
import UserNavigation from '../elements/UserNavigation'


function Profile(props) {
  return (
    <div>
      <UserNavigation />
      <h1>Profile</h1>
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
      </div>
      {/* Middle Section of Profile Page */}
      <div className="helper">
        <DefaultProfile />
      </div>
    </div>
  );
}

// Export function
export default Profile;
