import React, {Component} from 'react';
import {View, Text, FlatList, TextInput, Image, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appColors} from '../../../Theme/appColors';
import {appfontFamily} from '../../../Theme/appfontFamily';
import {appFontSize} from '../../../Theme/appfontsize';
export default class CustomListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distributerName: [],
      value: undefined,
      mainlistData: [{}],
    };
  }
  _handledropDownStateChange = (value, index, mainIndex, data, list) => {
    const {mainlistData} = this.state;
    const {onItemChanged} = this.props;
    if (index == 0) {
      mainlistData[mainIndex].value = value;
    } else if (index == 1) {
      mainlistData[mainIndex].value1 = value;
    } else if (index == 2) {
      mainlistData[mainIndex].value2 = value;
    } else if (index == 3) {
      mainlistData[mainIndex].value3 = value;
    } else if (index == 4) {
      mainlistData[mainIndex].value4 = value;
    }
    onItemChanged && onItemChanged(index, data, mainlistData);
    list?.onItemChanged && list?.onItemChanged(value);
    this.setState({mainlistData, value});
  };
  _handleAddmore = () => {
    const {mainlistData} = this.state;
    this.setState({mainlistData: [...mainlistData, {}]});
  };
  _crosscheckdetails = (itemindex, item) => {
    return itemindex == 0
      ? item?.value
      : itemindex == 1
      ? item?.value1
      : itemindex == 2
      ? item?.value2
      : itemindex == 3
      ? item?.value3
      : itemindex == 4
      ? item?.value1
      : undefined;
  };
  _onTextinputChanged = text => {
    const {onChangeText} = this.props;
    onChangeText && onChangeText(text);
  };
  render() {
    const {mainlistData} = this.state;
    const {
      headinglabel,
      typeDetails,
      disable_addmore,
      listStyle,
      disabled,
      color,
      isheaderRepeat,
      headingStyle,
    } = this.props;
    if (!disabled)
      return (
        <View style={styles._mainContainerbox}>
          {!isheaderRepeat && headinglabel && (
            <View
              style={[
                styles._headingbox,
                {backgroundColor: color},
                headingStyle,
              ]}>
              <Text style={styles._header_mainText}>{headinglabel}</Text>
            </View>
          )}
          <View>
            {mainlistData &&
              mainlistData.map((item, index) => {
                return (
                  <>
                    {isheaderRepeat && headinglabel && (
                      <View
                        style={[
                          styles._headingbox,
                          {backgroundColor: color},
                          headingStyle,
                        ]}>
                        <Text style={styles._header_mainText}>
                          {headinglabel}
                        </Text>
                      </View>
                    )}
                    <View
                      key={String(index)}
                      style={[styles._flatlist_mainBox, listStyle]}>
                      {typeDetails &&
                        typeDetails.map((typedetails, itemindex) => {
                          return (
                            <View key={String(itemindex)}>
                              {typedetails?.dropDownHeader && (
                                <View style={[styles._dropDownHeader]}>
                                  <Text style={styles._dropDownHeaderText}>
                                    {typedetails?.dropDownHeader}
                                  </Text>
                                </View>
                              )}
                              <View style={{paddingHorizontal: 20}}>
                                {typedetails?.type && (
                                  <Text style={styles._innerHeaderText}>
                                    {typedetails.type}
                                  </Text>
                                )}
                                {typedetails?.isTextInput && (
                                  <TextInput
                                    style={styles._textInput}
                                    placeholder={typedetails?.placeholder}
                                    onChangeText={e => {
                                      typedetails?.onChangeText &&
                                        typedetails?.onChangeText(e);
                                    }}
                                  />
                                )}
                                {typedetails?.isDropDown && (
                                  <Dropdown
                                    renderAccessory={renderAccessory}
                                    itemTextStyle={{
                                      fontFamily: appfontFamily.OBJ_REGULAR,
                                    }}
                                    fontSize={appFontSize.NORMAL_14}
                                    inputContainerStyle={{borderBottomWidth: 0}}
                                    dropdownOffset={{top: 0, left: 0}}
                                    containerStyle={styles._dropDownContainer}
                                    animationDuration={0.23}
                                    value={this._crosscheckdetails(
                                      itemindex,
                                      item,
                                    )}
                                    overlayStyle={{height: '100%'}}
                                    rippleOpacity={0}
                                    style={{
                                      backgroundColor: 'transparent',
                                      padding: 0,
                                    }}
                                    onChangeText={(value, ind, data) => {
                                      this._handledropDownStateChange(
                                        value,
                                        itemindex,
                                        index,
                                        data,
                                        typedetails,
                                      );
                                    }}
                                    label={
                                      this._crosscheckdetails(itemindex, item)
                                        ? ''
                                        : typedetails?.placeholder
                                    }
                                    labelTextStyle={styles._labelText}
                                    data={typedetails.data}
                                    dropdownMargins={{max: 10, min: 10}}
                                    baseColor={appColors.TEXT_COLOR_1}
                                  />
                                )}
                              </View>
                            </View>
                          );
                        })}
                      {this.props.children}
                    </View>
                  </>
                );
              })}

            {!disable_addmore && (
              <TouchableOpacity
                onPress={this._handleAddmore}
                style={[styles._addmorebox, {backgroundColor: color}]}>
                <Text style={styles._addmoreText}>Add more</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    else {
      return null;
    }
  }
}
const renderAccessory = () => {
  return (
    <View style={{marginRight: 10, paddingTop: 3}}>
      <AntDesign name="circledowno" />
    </View>
  );
};

//
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
    height: 40,
    marginBottom: 10,
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
