import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {appColors} from '../../../Theme/appColors';
import {appfontFamily} from '../../../Theme/appfontFamily';
import {appFontSize} from '../../../Theme/appfontsize';
const AddContainer = props => {
  const {labelhead, placeholder} = props;
  const [data, setdata] = useState([{}]);
  const _hanlde_addmore = () => {
    setdata([...data, {}]);
  };
  const _handleImagePick = async index => {
    await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    }).then(response => {
      if (data) {
        data[index].uri = response.uri;
        data[index].name = response.name;
        setdata([...data]);
      }
    });
  };
  const _handlePermissions = async index => {
    if (Platform.OS == 'android') {
      try {
        const Read_Permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
        if (Read_Permission === PermissionsAndroid.RESULTS.GRANTED) {
          _handleImagePick(index);
        } else {
          console.log('cancelled');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      _handleImagePick(index);
    }
  };
  return (
    <View>
      <View style={styles._mainView}>
        <Text style={styles._mainViewTxt}>{labelhead}</Text>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View style={styles._listInnerBox}>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Text>{index + 1}. </Text>
                  <Text
                    onPress={() => _handlePermissions(index)}
                    style={[styles._list_txt, item.name && {opacity: 1}]}>
                    {item?.name ? item.name : placeholder}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity onPress={_hanlde_addmore} style={styles._bottomButton}>
        <Text style={styles._buttonTxt}>Add More</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddContainer;
const styles = StyleSheet.create({
  _mainView: {
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: appColors.LIGHT_GRAY,
    borderWidth: 1,
    paddingVertical: 20,
  },
  _mainViewTxt: {
    marginBottom: 10,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
    fontSize: appFontSize.SUB_HEAD_15,
    opacity: 0.8,
  },
  _listInnerBox: {justifyContent: 'flex-end'},
  _list_txt: {
    fontFamily: appfontFamily.OBJ_REGULAR,
    opacity: 0.4,
  },
  _bottomButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    backgroundColor: appColors.LIGHT_BLUE,
    borderRadius: 20,
    marginTop: 10,
  },
  _buttonTxt: {color: appColors.WHITE, fontSize: appFontSize.NORMAL_11},
});
