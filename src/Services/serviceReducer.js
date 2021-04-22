import {CHANGE_INTERNET_CONNECTION} from './internet';
// import {SET_NOTIFICATION_ID} from './Notification/actions';

export const serviceState = {
  isConnected: false,
};

export default function(state, action) {
  switch (action.type) {
    case CHANGE_INTERNET_CONNECTION:
      return {
        ...state,
        isConnected: action.isConnected,
      };

    default:
      return {
        ...state,
      };
  }
}
