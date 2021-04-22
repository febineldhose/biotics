import React, {Component} from 'react';
import {View} from 'react-native';

export default class Wrapper extends Component {
  render() {
    const {style, width} = this.props;
    return (
      <View style={[style, {width: width, alignSelf: 'center'}]}>
        {this.props.children}
      </View>
    );
  }
}
