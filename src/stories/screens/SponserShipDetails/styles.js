import {StyleSheet} from 'react-native';
import {appColors} from '../../../Theme/appColors';
import {appfontFamily} from '../../../Theme/appfontFamily';
import {appFontSize} from '../../../Theme/appfontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.SNOW_DRIFT,
  },
  _renderMain: {width: '100%', alignSelf: 'center'},
  _renderInnerView: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E1D6F0',
  },
  defaultcolor: {
    // color: appColors.LIGHT_GRAY,
    opacity: 0.5,
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_13,
  },
  changedcolor: {
    color: appColors.GRAY_DARK,
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_13,
  },
  _lineStyle: {
    width: '100%',
    backgroundColor: appColors.LIGHT_GRAY,
    height: 1,
    opacity: 0.5,
  },
});
export default styles;
