// React Imports
import { useState } from 'react'

// Component Imports
import UserInfo from '../elements/UserInfo'
import ProfileRoutes from '../elements/ProfileRoutes'

// thomas' comment

// Jackson

function Profile(props) {
  
  return (
    <div>
      
      <h1>Profile Page</h1>

      <UserInfo name={props.user.name} email={props.user.email} id={props.user.id}/>

      <div className="helper">

       <ProfileRoutes />

      </div>
    </div>
  );
}

// Export function
export default Profile;

//Jeremy will edit this file very soon. 
