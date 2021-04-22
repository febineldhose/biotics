import {removePersistor, updatePersistor, getPersistor} from './functionals';

export const GET_PERSISTOR_VALUE = 'GET_PERSISTOR_VALUE';
export const UPDATE_PERSITOR_VALUE = 'UPDATE_PERSITOR_VALUE';
export const REMOVE_PERSITOR_VALUE = 'REMOVE_PERSITOR_VALUE';

export const getPersistvalue = data => ({
  type: GET_PERSISTOR_VALUE,
  data,
  callback: getPersistor,
});
export const updatePersistvalue = data => ({
  type: UPDATE_PERSITOR_VALUE,
  data,
  callback: updatePersistor,
});
export const removePersistvalue = data => ({
  type: REMOVE_PERSITOR_VALUE,
  data,
  callback: removePersistor,
});
