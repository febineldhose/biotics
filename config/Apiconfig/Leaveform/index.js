import {appConfig} from '../../config';

const _leaveform = {
  url: appConfig.ip + '/api/post/leave',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export {_leaveform};
