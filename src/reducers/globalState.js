import {persistorState} from '../Services/Persistor/reducer';
import {initialState} from '../container/HomeContainer/reducer';
import {navigState} from '../Navigation/navigationReducer';
import {loginState} from '../container/LoginContainer/reducer';
import {serviceState} from '../Services/serviceReducer';
//
//
export const globalState = {
  persistor: persistorState,
  service: serviceState,
  navig: navigState,
  login: loginState,
  home: initialState,
};
