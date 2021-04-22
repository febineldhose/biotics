import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {appColors} from '../../Theme/appColors';
import {appfontFamily} from '../../Theme/appfontFamily';

export default class Search extends Component {
  render() {
    const {placeholder, width} = this.props;
    return (
      <View
        style={{
          width: '85%',
          backgroundColor: appColors.THIN_LIGHT_GRAY,
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          maxHeight: 45,
        }}>
        <MaterialIcons
          name="search"
          color={appColors.SCIENCE_BLUE}
          style={{marginLeft: 10}}
          size={14}
        />
        <TextInput style={styles._textInput} placeholder={placeholder} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _textInput: {fontFamily: appfontFamily.OBJ_REGULAR, flex: 1},
});
