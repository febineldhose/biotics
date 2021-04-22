import {getCounterTypes} from './functionals';

export const GET_COUNTER_TYPES = 'GET_COUNTER_TYPES';
export const GET_COUNTER_TYPES_SUCCESS = 'GET_COUNTER_TYPES_SUCCESS';
export const GET_COUNTER_TYPES_FAILED = 'GET_COUNTER_TYPES_FAILED';
export const getcountertypes = data => ({
  type: GET_COUNTER_TYPES,
  data,
  callback: getCounterTypes,
});
