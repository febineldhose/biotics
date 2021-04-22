import {onloginAction} from './functionals';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

//
export const onlogin = data => ({type: LOGIN, data, callback: onloginAction});
// export const onlogin = data => ({type: LOGIN, data}, onloginAction);
