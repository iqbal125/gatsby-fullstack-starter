import React, { useContext } from 'react';
import styles from './sidebar.module.css';
import GeneralContext from '../../utils/general_context';
import AuthContext from '../../utils/auth_context';
import { navigate } from 'gatsby';

const SideBar = props => {
  const contextGeneral = useContext(GeneralContext);
  const context = useContext(AuthContext);

  const logOut = () => {
    navigate('/');
    context.firebase.auth().signOut();
    setTimeout(() => context.LogOut(), 200);
  };

  const goToProfile = () => {
    navigate('/app/profile');
  };

  return (
    <div className={styles.side_drawer}>
      <div className={styles.side_items} onClick={goToProfile}>
        Profile
      </div>
      <div className={styles.side_items} onClick={logOut}>
        Logout
      </div>
    </div>
  );
};

export default SideBar;
