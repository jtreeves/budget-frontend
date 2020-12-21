// Create function
function Profile(props) {
    return (
        <div>
            <h1>Profile</h1>
            <p><strong>Name:</strong> {props.user.name}</p> 
            <p><strong>Email:</strong> {props.user.email}</p> 
            <p><strong>ID:</strong> {props.user.id}</p>
        </div>
    )
}

// Export function
export default Profile