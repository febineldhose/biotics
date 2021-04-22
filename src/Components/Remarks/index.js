import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {appfontFamily} from '../../Theme/appfontFamily';
import {appFontSize} from '../../Theme/appfontsize';
import {appColors} from '../../Theme/appColors';
export default class Remarks extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    const {onChangeText, style} = this.props;
    return (
      <View style={[{paddingHorizontal: 25}, style]}>
        <Text style={styles._remark_text}>Add Remarks</Text>
        <View
          style={{
            minHeight: 150,
            borderWidth: 1,
            borderColor: appColors.LIGHT_GRAY,
            borderRadius: 10,
            justifyContent: 'flex-start',
            paddingTop: 5,
            paddingLeft: 5,
          }}>
          <TextInput
            value={this.state.value}
            onChangeText={text => {
              onChangeText && onChangeText(text);
              this.setState({text});
            }}
            multiline={true}
            placeholder="Type one or two sentance"
            style={styles._textInput}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _remark_text: {
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_12,
  },
  _textInput: {
    width: '100%',
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: appFontSize.NORMAL_12,
  },
});
