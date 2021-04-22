import React, {Component} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {appColors} from '../../Theme/appColors';
export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.translateY = new Animated.Value(0);
    this.state = {isDroped: false, selectedItem: props.defaultValue};
  }
  _handleHeaderClick = () => {
    const {isDroped} = this.state;
    this.setState({isDroped: !isDroped}, () => {
      this._hanldeAnimationDrop();
    });
  };
  _hanldeAnimationDrop = () => {
    const {isDroped} = this.state;
    if (isDroped) {
      Animated.spring(this.translateY, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(this.translateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };
  _handleItemSelection = (item, index) => {
    const {onChangeItem} = this.props;
    onChangeItem && onChangeItem(item, index); // selected item
    this.setState({selectedItem: item});
    this._handleHeaderClick();
  };
  render() {
    const {
      data,
      headerComponent,
      renderItem,
      zIndex,
      isMotionAnimated,
      style,
    } = this.props;
    const {selectedItem} = this.state;
    const changingHeight = this.translateY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 150], // default height of the dropdown sethere.
      extrapolate: 'clamp',
    });

    return (
      <View style={[styles._main, {zIndex}, style]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this._handleHeaderClick}
          style={styles._touchable_1}>
          {headerComponent && headerComponent(selectedItem?.value)}
        </TouchableOpacity>
        <Animated.View
          style={[
            styles._animatedView,
            {
              height: changingHeight,
            },
            !isMotionAnimated && {position: 'absolute', top: '90%'}, // creates a movable motion for header
          ]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => String(index)}
            data={data}
            style={styles._listStyle}
            renderItem={({item, index}) => {
              const changeColor = selectedItem?.value == item?.value;
              return (
                <>
                  <TouchableOpacity
                    onPress={() => this._handleItemSelection(item, index)}
                    activeOpacity={1}>
                    {renderItem && renderItem(item, index, changeColor)}
                  </TouchableOpacity>
                </>
              );
            }}
          />
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _main: {backgroundColor: appColors.WHITE},
  _touchable_1: {paddingVertical: 10},
  _animatedView: {width: '100%', alignSelf: 'center'},
  _listStyle: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: appColors.WHITE,
  },
});
