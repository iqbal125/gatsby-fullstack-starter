import React, { useContext } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import Profile from '../Profile';
import AuthContext from '../../utils/auth_context';
import Auth from '../Authentication/auth';

const Routes = () => {
  const context = useContext(AuthContext);

  //check token expires time on private routes
  const isTokenValid = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresIn'));
    return new Date().getTime() < expiresAt;
  };

  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    let isAuthenticated = context.state.isAuthenticated;

    if (!isAuthenticated && isTokenValid()) {
      context.LogOut();
      navigate('/app/login');
      return null;
    }
    return <Component {...rest} />;
  };

  return (
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Auth path="/app/login" />
    </Router>
  );
};

export default Routes;
