import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {calenderIcon} from '../../../assets/staticImages';
import {appfontFamily} from '../../Theme/appfontFamily';

export default class CustomCalender extends Component {
  constructor(props) {
    super(props);
    this.state = {date: ''};
  }
  render() {
    const {label, onChangeDate, style, placeholder} = this.props;
    return (
      <View style={[style, {alignSelf: 'center', width: '100%'}]}>
        <DatePicker
          iconComponent={
            <View style={styles._iconBox}>
              <Image
                source={calenderIcon}
                style={styles._iconImage}
                resizeMode="contain"
              />
              <Text style={styles._icontext}>{label}</Text>
            </View>
          }
          placeholder={placeholder}
          style={{width: '100%'}}
          date={this.state.date}
          mode="date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: styles._dateInput,
            dateText: {fontFamily: appfontFamily.OBJ_REGULAR},
          }}
          onDateChange={date => {
            onChangeDate && onChangeDate(date);
            this.setState({date: date});
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _iconBox: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  _iconImage: {height: 20, width: 20, alignSelf: 'center'},
  _icontext: {marginLeft: 10, fontFamily: appfontFamily.OBJ_REGULAR},
  _dateInput: {
    alignItems: 'flex-end',
    borderWidth: 0,
  },
});
