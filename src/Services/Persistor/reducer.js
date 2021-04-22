import {
  GET_PERSISTOR_VALUE,
  REMOVE_PERSITOR_VALUE,
  UPDATE_PERSITOR_VALUE,
} from './actions';
export const persistorState = {isloggedIn: false, data: null};
export default function(state, action) {
  switch (action.type) {
    case GET_PERSISTOR_VALUE: {
      return {
        ...state,
        data: action.data,
        isloggedIn: action.data ? true : false,
      };
    }
    case UPDATE_PERSITOR_VALUE: {
      return {
        ...state,
        data: action.data,
        isloggedIn: action.data ? true : false,
      };
    }
    case REMOVE_PERSITOR_VALUE: {
      return {...state, data: null, isloggedIn: false};
    }
    default:
      return state;
  }
}
