import {StyleSheet} from 'react-native';
import {appColors} from '../../../Theme/appColors';
import {appfontFamily} from '../../../Theme/appfontFamily';
import {appFontSize} from '../../../Theme/appfontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  _scrollShaper: {width: '90%', alignSelf: 'center'},
  _inputStyle: {
    borderColor: appColors.LIGHT_GRAY,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: appColors.WHITE,
    height: 40,
    paddingLeft: 15,
    fontSize: appFontSize.NORMAL_14,
    fontFamily: appfontFamily.OBJ_REGULAR,
  },
});
export default styles;
