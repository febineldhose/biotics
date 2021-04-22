import {INCREMENT, DECREMENT} from './action';
const initialState = {count: 0};
export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {...state, count: action.count};
    }
    case DECREMENT: {
      return {...state, count: 1000};
    }
    default:
      return state;
  }
}
