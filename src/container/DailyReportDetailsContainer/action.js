export const CREATE_DAILY_REPORT = 'CREATE_DAILY_REPORT';
export const CREATE_DAILY_REPORT_SUCCESS = 'CREATE_DAILY_REPORT_SUCCESS';
export const CREATE_DAILY_REPORT_FAILED = 'CREATE_DAILY_REPORT_FAILED';

//
export const GET_COUNTER_NAME = 'GET_COUNTER_NAME';
export const GET_COUNTER_NAME_SUCCESS = 'GET_COUNTER_NAME_SUCCESS';
export const GET_COUNTER_NAME_FAILED = 'GET_COUNTER_NAME_FAILED';
export const createDailyReport = data => ({type: CREATE_DAILY_REPORT, data});
export const getCountername = data => ({type: GET_COUNTER_NAME, data});
