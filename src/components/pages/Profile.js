// React Imports
import { useState } from 'react'

// Component Imports
import UserNavigation from '../elements/UserNavigation'
import UserInfo from '../elements/UserInfo'
import ProfileRoutes from '../elements/ProfileRoutes'


function Profile(props) {
  
  return (
    <div>
      <UserNavigation/>

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
