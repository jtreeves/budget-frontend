// React Imports
import { useState } from 'react';

// Component Imports
import UserInfo from '../elements/UserInfo';
import ProfileRoutes from '../elements/ProfileRoutes';

function Profile(props) {
  return (
    <div className="div-profile-page">
      {/* TURNED OFF H1 */}
      {/* <h1>Profile Page</h1> */}

      <UserInfo name={props.user.name} email={props.user.email} id={props.user.id} />

      <div className="div-profile-workspace">
        <ProfileRoutes />
      </div>
    </div>
  );
}

// Export function
export default Profile;
