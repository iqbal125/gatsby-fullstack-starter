import { SIDEDRAWEROPEN, SIDEDRAWERCLOSE } from '../actions/action_types';

export const initialStateSide = {
  isOpen: false
};

export const SideDrawerReducer = (state, action) => {
  switch (action.type) {
    case SIDEDRAWEROPEN:
      return { isOpen: true };
    case SIDEDRAWERCLOSE:
      return { isOpen: false };
    default:
      return state;
  }
};
