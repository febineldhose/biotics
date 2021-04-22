import {apis} from '../config';
import {callapi, POST} from '../../stories/GlobalFunctions/callapi';
import {updatePersistvalue} from '../../Services/Persistor/actions';
import {LOGIN_SUCCESS, LOGIN_FAILED} from './actions';
import {Toast} from '../../stories/GlobalFunctions/Toast';
import {error_message, toastMsgs} from '../../config';
//
const MESSAGE = 'Login Success';
export const onloginAction = async (dispatch, data, state) => {
  const isconnected = state?.internet?.isConnected;
  if (isconnected) {
    const response = await callapi(apis.login, data, POST);
    console.warn('loginresponse', response);
    if (response && response?.Message == MESSAGE) {
      const userdata = response && response;
      dispatch({type: LOGIN_SUCCESS});
      dispatch(updatePersistvalue(userdata));
      Toast(toastMsgs.login_success);
    } else {
      dispatch({type: LOGIN_FAILED});
      Toast(error_message.login_invalid);
    }
  } else {
    Toast(toastMsgs.no_internet);
  }
};
