import {
  callapi,
  POST,
  API_RESPONSE,
} from '../../stories/GlobalFunctions/callapi';
import {apis} from '../config';
import {GET_COUNTER_TYPES_SUCCESS, GET_COUNTER_TYPES_FAILED} from './action';
import {Toast} from '../../stories/GlobalFunctions/Toast';
import {toastMsgs} from '../../config';
import store from '../../store';

//
export const getCounterTypes = async (dispatch, _, state) => {
  const isconnected = state?.internet?.isConnected;
  if (isconnected) {
    const data = state?.persistor?.data;
    const user_id = data ? data?.user_data?.id : undefined;
    const api_token = data ? data?.user_data?.api_token : undefined;
    const payload = {user_id, api_token};
    const response = await callapi(apis.counterTypes, payload, POST);
    if (response && response.Message == API_RESPONSE) {
      const recived_data = response?.countertype;
      dispatch({type: GET_COUNTER_TYPES_SUCCESS, data: recived_data});
    } else {
      Toast(toastMsgs.somethingWrong);
      dispatch({type: GET_COUNTER_TYPES_FAILED});
    }
  } else {
    Toast(toastMsgs.no_internet);
  }
};
