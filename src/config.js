const ENV = 'development'; // developmet & production

const server_ip = 'http://202.0.103.128:';
const server_port = '8079';

const test_ip = 'http://biotics.hornbillsoft.com/api/';
const test_port = '8079';

const production_url = `${server_ip}${server_port}`;
const development_url = `${test_ip}`;

export const baseUrl = () => {
  if (ENV === 'development') {
    return development_url;
  } else return production_url;
};

export const ONE_SIGNAL_APP_ID = 'your_app_id';

export const DEFAULT_COUNTRY_CODE = '44';
export const OTP_DURATION_IN_SECONDS = 120;

export const error_message = {
  org_name: 'Organization name is required',
  emp_name: 'Employee name is required',
  mobile: 'Invalid mobile number',
  email: 'Invalid email',
  password:
    'Minimum 8 characters, at least one letter, one number and one special character',
  confirm_pass: 'Password mismatch',
  type: 'Type is required',
  pincode: 'Pincode must be 6 number',
  address: 'Address is required',
  location: 'Location is required',
  about: 'About is required',
  uk_pincode: 'Did not match pincode',
  login_invalid: 'Invalid user name or password',
};

export const toastMsgs = {
  somethingWrong: 'Something went wrong !',
  exitApp_Heading: null,
  exitApp_subHeading: 'Do you want to exit application ?',
  no_internet: 'No Internet Connectivity',
  invalid_otp: 'Invalid OTP',
  otp_validation: 'Please enter OTP',
  logout_App: 'Are you sure want to logout?',
  login_success: 'login Successfully',
};

export const regex = {
  email_regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  mobile_regex: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
  // password_regex : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //Minimum eight characters, at least one letter and one number:
  password_regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, //Minimum eight characters, at least one letter, one number and one special character:
  number_regex: /^[0-9]*$/,
  pincode_regex: /^\d{5}(?:[-\s]\d{4})?$/,
  uk_pincode_regex: /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) {0,1}[0-9][A-Za-z]{2})$/,
};
