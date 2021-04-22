import {appConfig} from '../../config';

const _counter_Type = {
  url: appConfig.ip + '/api/countertype',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
const _counter_name = {
  url: appConfig.ip + '/api/list/counters',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
const _doctor_name = {
  url: appConfig.ip + '/api/doctors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
// export {_distruButorname, _counter_Type, _counter_name, _doctor_name};
