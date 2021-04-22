import {useReducer} from 'react';
import {globalState} from './globalState';
import persistor from '../Services/Persistor/reducer';
import internet from '../Services/serviceReducer';
import navig from '../Navigation/navigationReducer';
import home from '../container/HomeContainer/reducer';
import login from '../container/LoginContainer/reducer';
//
//
function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
}
//
//
export const rootReducer = () => {
  const value = useReducer(
    combineReducers({persistor, internet, navig, login, home}),
    globalState,
  );
  return value;
};
