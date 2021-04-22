import {StyleSheet} from 'react-native';
import {appColors} from '../../../Theme/appColors';
import {appfontFamily} from '../../../Theme/appfontFamily';
import {appFontSize} from '../../../Theme/appfontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.SNOW_DRIFT,
  },
  _dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  _datetext: {
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_13,
  },
});
export default styles;
