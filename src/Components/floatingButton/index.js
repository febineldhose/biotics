import React from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {appColors} from '../../Theme/appColors';
function FloatingButton(props) {
  const {onPress} = props;
  return (
    <Entypo
      style={{
        position: 'absolute',
        right: 20,
        bottom: 30,
        backgroundColor: appColors.SCIENCE_BLUE,
        borderRadius: 100,
      }}
      name="plus"
      color={appColors.WHITE}
      size={55}
      onPress={onPress}
    />
  );
}
export default FloatingButton;
