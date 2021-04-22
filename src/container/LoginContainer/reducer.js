import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from './actions';

export const loginState = {isloading: false};
export default function(state, action) {
  switch (action.type) {
    case LOGIN: {
      return {...state, isloading: true};
    }
    case LOGIN_SUCCESS: {
      return {...state, isloading: false, data: action.data};
    }
    case LOGIN_FAILED: {
      return {...state, isloading: false};
    }

    default:
      return state;
  }
}
