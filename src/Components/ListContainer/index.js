import React, {Component} from 'react';
import {View, Text, FlatList, TextInput, Image} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appColors} from '../../Theme/appColors';
import {appfontFamily} from '../../Theme/appfontFamily';
import {appFontSize} from '../../Theme/appfontsize';
export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distributerName: [],
      value: undefined,
      mainlistData: [{}],
    };
  }
  _handledropDownStateChange = (value, index, mainIndex, data) => {
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
    this.setState({mainlistData});
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
    const {value, mainlistData} = this.state;
    const {
      headinglabel,
      headingStyle,
      addmoreStyle,
      typeDetails,
      mode_textInputdetails,
      dropDownHeaderStyle,
      disable_addmore,
      flat_listStyle,
      listKey,
      disabled,
      type_listStyle,
    } = this.props;
    if (!disabled)
      return (
        <View style={styles._mainContainerbox}>
          {headinglabel && (
            <View style={[styles._headingbox, headingStyle]}>
              <Text style={styles._header_mainText}>{headinglabel}</Text>
            </View>
          )}

          <View style={{flex: 1}}>
            <FlatList
              listKey={listKey}
              data={mainlistData}
              keyExtractor={(item, index) => item.value + index.toString()}
              renderItem={({item, index}) => {
                const _isborderRadius = mainlistData?.length - 1 == index;
                return (
                  <View
                    style={[
                      styles._flatlist_mainBox,
                      _isborderRadius && {
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                      },
                      !headinglabel && {borderRadius: 10},
                      flat_listStyle,
                    ]}>
                    {mode_textInputdetails && (
                      <View style={{paddingHorizontal: 20}}>
                        <TextInput
                          style={styles._textInput}
                          placeholder={mode_textInputdetails?.placeholder}
                        />
                        <View style={styles._textInput_mainBox}>
                          <Text style={styles._textInput_text_}>
                            {mode_textInputdetails?.supporting_text}
                          </Text>
                          <TouchableOpacity
                            style={{paddingHorizontal: 7, paddingVertical: 4}}>
                            <Image
                              source={mode_textInputdetails?.image}
                              style={{height: 15, width: 15}}
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                    {typeDetails &&
                      typeDetails.map((typedetails, itemindex) => {
                        return (
                          <View
                            key={String(itemindex)}
                            style={[
                              {
                                marginTop: itemindex == 0 ? 0 : 25,
                              },
                              type_listStyle,
                            ]}>
                            {typedetails?.dropDownHeader && (
                              <View
                                style={[
                                  styles._dropDownHeader,
                                  dropDownHeaderStyle,
                                ]}>
                                <Text
                                  style={[
                                    styles._dropDownHeaderText,
                                    dropDownHeaderStyle?.text,
                                  ]}>
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
                                    typedetails?.onItemChanged &&
                                      typedetails?.onItemChanged(value);
                                    this.setState({value});

                                    this._handledropDownStateChange(
                                      value,
                                      itemindex,
                                      index,
                                      data,
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
                );
              }}
            />
            {!disable_addmore && (
              <TouchableOpacity
                onPress={this._handleAddmore}
                style={[styles._addmorebox, addmoreStyle]}>
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
