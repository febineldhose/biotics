import {appConfig} from '../config';

const Counter_Type = {
  url: appConfig.ip + '/api/countertype',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
const Counter_Name = {
  url: appConfig.ip + '/api/list/counters',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
const Doctor_Name = {
  url: appConfig.ip + '/api/doctors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
export {Counter_Type, Counter_Name, Doctor_Name};
