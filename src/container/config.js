import {baseUrl} from '../config';
const url = baseUrl();
export const apis = {
  login: url + 'tm/login',
  counterTypes: url + 'countertype',
  createDailyReport: url + 'tm/post/pob',
};
