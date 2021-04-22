import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {View} from 'react-native';

const CustomTextinput = props => {
  const {placeholder, inputStyle, style} = props;
  return (
    <View style={style}>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        // underlineColorAndroid="white"
      />
    </View>
  );
};
export default CustomTextinput;
