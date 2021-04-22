import React from 'react';
import {View} from 'react-native';
const Seperator = props => {
  const {style, height} = props;
  return <View style={[style, {height: height}]} />;
};
export default Seperator;
