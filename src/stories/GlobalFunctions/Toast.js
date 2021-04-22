import {ToastAndroid, Platform} from 'react-native';
import ToastIos from 'react-native-simple-toast';

const os = Platform.OS;
export const Toast = props => {
  console.log('props calling>>>>>>>>>>', props);
  let ToastMessage =
    os === 'android'
      ? ToastAndroid.show(props, ToastAndroid.SHORT)
      : ToastIos.show(props, ToastIos.LONG);
  return ToastMessage;
};
