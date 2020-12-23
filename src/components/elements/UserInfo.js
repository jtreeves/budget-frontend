function UserInfo(props) {
  return (
    <div className="div-profile-user-info">
      <div className="helper">
        <h2>User Info</h2>
        <p>
          <strong>Name:</strong> {props.name}
        </p>
        <p>
          <strong>Email:</strong> {props.email}
        </p>
        <p>
          <strong>ID:</strong> {props.id}
        </p>
      </div>
    </div>
  );
}

// Export function
export default UserInfo;
