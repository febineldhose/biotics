import NetInfo from '@react-native-community/netinfo';

export const CHANGE_INTERNET_CONNECTION = 'CHANGE_INTERNET_CONNECTION';

export const checkInternet = dispatch => {
  NetInfo.fetch().then(isConnected => {
    dispatch({type: CHANGE_INTERNET_CONNECTION, isConnected});
  });
  const checkInternet = NetInfo.addEventListener(state => {
    console.log('Connection check', state);
    console.log('Is connected?', state.isConnected);
    let isConnected = state.isConnected;
    dispatch({type: CHANGE_INTERNET_CONNECTION, isConnected});
  });
};
