import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {appfontFamily} from '../../Theme/appfontFamily';
import {appFontSize} from '../../Theme/appfontsize';
import {appColors} from '../../Theme/appColors';

const CustomButton = props => {
  const {centerlabel, style, onPress} = props;
  return (
    <TouchableOpacity style={[styles._custombutton, style]} onPress={onPress}>
      {centerlabel && <Text style={styles._textStyle}>{centerlabel}</Text>}
    </TouchableOpacity>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  _textStyle: {
    color: appColors.WHITE,
    fontSize: appFontSize.SUB_HEAD_18,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
  },
  _custombutton: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: appColors.SCIENCE_BLUE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 45,
  },
});
