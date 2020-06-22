import { LOGIN, LOGOUT, SIDEDRAWERCLOSE, SIDEDRAWEROPEN } from './action_types';

export const saveUserAction = user => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const Logout = {
  type: LOGOUT
};

export const SideDrawerOpen = { type: SIDEDRAWEROPEN };

export const SideDrawerClose = { type: SIDEDRAWERCLOSE };
