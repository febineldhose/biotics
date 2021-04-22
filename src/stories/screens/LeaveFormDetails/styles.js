import {StyleSheet} from 'react-native';
import {appfontFamily} from '../../../Theme/appfontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    fontSize: 16,
    fontFamily: appfontFamily.OBJ_REGULAR,
    width: '100%',
    backgroundColor: '#F7F9F8',
  },
  _textInputBox: {
    backgroundColor: '#F7F9F8',
    minHeight: 100,
    borderRadius: 10,
    paddingLeft: 5,
  },
  _scrollShaper: {width: '90%', alignSelf: 'center'},
});
export default styles;
