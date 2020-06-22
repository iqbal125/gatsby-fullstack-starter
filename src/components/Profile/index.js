import React, { useContext } from 'react';
import AuthContext from '../../utils/auth_context';

const Profile = () => {
  const { authState } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome: {authState.user.username} </h1>
    </div>
  );
};

export default Profile;
