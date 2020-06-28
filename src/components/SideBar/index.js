import React, { useContext } from 'react';
import styles from './sidebar.module.css';
import GeneralContext from '../../utils/general_context';
import AuthContext from '../../utils/auth_context';
import { navigate } from 'gatsby';
import { MdAccountCircle } from 'react-icons/md';

const SideBar = props => {
  const contextGeneral = useContext(GeneralContext);
  const context = useContext(AuthContext);

  const logOut = () => {
    navigate('/');
    context.firebase.auth().signOut();
    setTimeout(() => context.LogOut(), 200);
    contextGeneral.closeSideDrawer();
  };

  const goToProfile = () => {
    navigate('/app/profile');
    contextGeneral.closeSideDrawer();
  };

  return (
    <div className={styles.side_drawer}>
      <div className={styles.header_photo_wrap_desk}>
        {context.authState.user.photo ? (
          <img src={context.authState.user.photo} className={styles.header_photo} alt="Not Found" />
        ) : (
          <MdAccountCircle className={styles.header_photo} />
        )}
      </div>
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
