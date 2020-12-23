import calcTotal from '../../utilities/calcTotal'

function UserInfo(props) {

  const monthly = calcTotal(props.budget)

  return (
    <div className="div-profile-user-info">
      <div>
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
      
      <div>
        <h2>Summary</h2>
        <div className="div-profile-workspace">
          <h2>Monthly</h2>
          <h2>${monthly}</h2>
        </div>
      </div>
    </div>
  );
}

// Export function
export default UserInfo;
