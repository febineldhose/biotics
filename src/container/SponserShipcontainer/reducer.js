import {ISLOGIN, ISLOGOUT, RENAME} from './action';

export const initialState = {count: 0, rename: '', isloading: false};

export default function(state = initialState, action) {
  switch (action.type) {
    case ISLOGIN: {
      return {...state, isloading: true};
    }
    case ISLOGOUT: {
      return {...state, count: 20, isloading: false};
    }
    case RENAME: {
      return {...state, count: 30, rename: false};
    }

    default:
      return state;
  }
}
