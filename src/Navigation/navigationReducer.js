import {
  CHANGE_NAVIGATION_ACTION,
  CHANGE_NAVIGATION_ACTION_ROOT,
} from '../Services/changeNavigation';

export const navigState = {
  screenFrom: '',
  screenTo: '',
};

export default function(state, action) {
  switch (action.type) {
    case CHANGE_NAVIGATION_ACTION:
      return {
        ...state,
        screenFrom: action.data.from,
        screenTo: action.data.to,
      };
    case CHANGE_NAVIGATION_ACTION_ROOT:
      return {
        ...state,
        screenFrom: action.data.from,
        screenTo: action.data.to,
      };

    default:
      return {
        ...state,
      };
  }
}
