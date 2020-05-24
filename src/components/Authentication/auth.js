import React, { useState, useContext } from 'react';
import styles from './auth.module.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { navigate } from 'gatsby';
import AuthContext from '../../utils/auth_context';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const Auth = () => {
  const [isLoading, setLoading] = useState(false);
  const context = useContext(AuthContext);

  const uiConfig = {
    credentialHelper: 'none',
    signInFlow: 'popup',
    signInOptions: [
      context.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      context.firebase.auth.GithubAuthProvider.PROVIDER_ID,
      context.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      context.firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],

    callbacks: {
      signInSuccessWithAuthResult: function(authResult) {
        saveProfile(authResult);
        return false;
      },
      signInFailure: function(error) {
        console.log(error);
      }
    }
  };

  const saveProfile = authResult => {
    console.log(authResult);
    setLoading(true);

    context.firebase
      .auth()
      .currentUser.getIdToken()
      .then(token => sendtokenToServer(token));

    const sendtokenToServer = token => {
      axios
        .post('http://localhost:3000/sendtoken', { token })
        .then(res => sendProfiletoContext(res.data))
        .catch(err => console.log(err));
    };

    const sendProfiletoContext = data => {
      let email = authResult.user.email;
      let username = authResult.user.displayName;
      let id = jwt_decode(data.token);
      let photo = authResult.user.photoURL;

      let user = {
        email,
        username,
        id,
        photo
      };

      context.saveUser(user);
      navigate('/app/profile');
    };
  };

  return (
    <div className={styles.form_container}>
      {isLoading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={context.firebase.auth()} />
    </div>
  );
};

export default Auth;
