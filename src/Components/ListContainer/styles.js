import {StyleSheet} from 'react-native';
import {appColors} from '../../Theme/appColors';
import {appfontFamily} from '../../Theme/appfontFamily';
import {appFontSize} from '../../Theme/appfontsize';
const styles = StyleSheet.create({
  _mainContainerbox: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    // marginTop: 10,
  },
  _headingbox: {
    width: '100%',
    backgroundColor: appColors.SCIENCE_BLUE,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _addmorebox: {
    backgroundColor: appColors.LIGHT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 10,
  },
  _addmoreText: {
    color: appColors.WHITE,
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_11,
  },
  _header_mainText: {
    color: appColors.WHITE,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
    fontSize: appFontSize.NORMAL_13,
  },
  _innerHeaderText: {
    marginBottom: 10,
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_12,
  },
  _dropDownHeader: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  _dropDownHeaderText: {
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
    fontSize: appFontSize.NORMAL_13,
  },
  _dropDownContainer: {
    borderRadius: 10,
    backgroundColor: appColors.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 9,
    width: '100%',
    alignSelf: 'center',
    // paddingBottom: 3,
    height: 40,
  },
  _labelText: {
    color: appColors.TEXT_COLOR_1,
    opacity: 0.4,
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_12,
  },
  _flatlist_mainBox: {
    width: '100%',
    backgroundColor: '#EBEBEB',
    paddingVertical: 30,
  },
  _textInput_mainBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  _textInput_text_: {
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_12,
  },
  _textInput: {
    width: '100%',
    height: 40,
    backgroundColor: appColors.WHITE,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
export {styles, listcolors};
const listcolors = {
  BACKGROUND_COLOR_2: '#343434',
  BACKGROUND_COLOR_3: '#A43FA8',
  BACKGROUND_COLOR_4: '#B42F37',
  BACKGROUND_COLOR_5: '#EBEBEB',
};
