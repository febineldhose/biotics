import {
  GET_COUNTER_TYPES,
  GET_COUNTER_TYPES_FAILED,
  GET_COUNTER_TYPES_SUCCESS,
} from './action';
export const initialState = {isloading: false, counterTypes: null};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTER_TYPES: {
      return {...state, isloading: true, count: action.data};
    }
    case GET_COUNTER_TYPES_SUCCESS: {
      return {...state, isloading: false, counterTypes: action.data};
    }
    case GET_COUNTER_TYPES_FAILED: {
      return {...state, isloading: false, counterTypes: action.data};
    }
    default:
      return state;
  }
}
