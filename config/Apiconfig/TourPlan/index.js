import {appConfig} from '../../config';

const _stationType = {
  url: appConfig.ip + '/api/list/stationtypes',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
const _station_name = {
  url: appConfig.ip + '/api/list/stations',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
const _submit_tour = {
  url: appConfig.ip + '/api/post/tourplan',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
export {_stationType, _station_name, _submit_tour};
