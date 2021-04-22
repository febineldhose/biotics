import {
  CREATE_DAILY_REPORT,
  CREATE_DAILY_REPORT_SUCCESS,
  CREATE_DAILY_REPORT_FAILED,
} from './action';

export const initialState = {isloading: false};
export default function(state, action) {
  switch (action.type) {
    case CREATE_DAILY_REPORT: {
      return {...state, isloading: true};
    }
    case CREATE_DAILY_REPORT_SUCCESS: {
      return {...state, isloading: false};
    }
    case CREATE_DAILY_REPORT_FAILED: {
      return {...state, isloading: false};
    }

    default:
      return state;
  }
}
