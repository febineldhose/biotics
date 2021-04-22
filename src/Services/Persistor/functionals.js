import AsyncStorage from '@react-native-community/async-storage';
import {getPersistvalue} from './actions';
import {checkInternet} from '../internet';

const getPersistor = async dispatch => {
  checkInternet(dispatch);
  const value = await AsyncStorage.getItem('credential');
  const parseValue = JSON.parse(value);
  dispatch(getPersistvalue(parseValue));
};
const updatePersistor = async (_, data) => {
  console.warn('updatedasync', data);

  await AsyncStorage.setItem('credential', JSON.stringify(data));
};
const removePersistor = async () => {
  console.warn('remove');
  await AsyncStorage.removeItem('credential');
};
export {getPersistor, updatePersistor, removePersistor};
