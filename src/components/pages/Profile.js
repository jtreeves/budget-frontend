// Create function
import UserNavigation from '../elements/UserNavigation'

function Profile(props) {
    return (
        <div>
            <UserNavigation />
            <h1>Profile</h1>
            <p><strong>Name:</strong> {props.user.name}</p> 
            <p><strong>Email:</strong> {props.user.email}</p> 
            <p><strong>ID:</strong> {props.user.id}</p>
        </div>
    )
}

// Export function
export default Profile