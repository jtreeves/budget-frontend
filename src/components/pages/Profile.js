import { useEffect, useState } from 'react'


import UserNavigation from '../elements/UserNavigation'
import DynamicContent from './DynamicContent'

function Profile(props) {
  
  const [extension, setExtension] = useState(props.match.params.ext)
  

  return (
    <div>
      <UserNavigation setExtension={setExtension}/>
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
      <div className="helper">
        <DynamicContent extension={extension}/>
      </div>
    </div>
  );
}

// Export function
export default Profile;
