import React from 'react';
import {View, StatusBar, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appColors} from '../../Theme/appColors';
import {appfontFamily} from '../../Theme/appfontFamily';
import {appFontSize} from '../../Theme/appfontsize';

function AppHeader(props) {
  const {navigation, centerlabel} = props;
  return (
    <View style={styles._mainContainerBox}>
      <StatusBar backgroundColor="#4093F0" barStyle="default" />
      <AntDesign
        name="arrowleft"
        color={appColors.WHITE}
        size={26}
        style={styles._backButton}
        onPress={() => {
          navigation.goBack();
        }}
      />
      {centerlabel && <Text style={styles._textBox}>{centerlabel}</Text>}
    </View>
  );
}
export default AppHeader;

const styles = StyleSheet.create({
  _mainContainerBox: {
    height: 80,
    backgroundColor: appColors.HEADER_MAIN,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 15,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  _backButton: {
    position: 'absolute',
    alignSelf: 'center',
    left: 15,
    padding: 7,
  },
  _textBox: {
    color: appColors.WHITE,
    fontSize: appFontSize.SUB_HEAD_17,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
  },
});
