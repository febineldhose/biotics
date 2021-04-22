import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import AppHeader from '../../../Components/header';
import {Seperator} from '../../../Components/Seperator';
import CustomCalender from '../../../Components/Calender';
import CustomButton from '../../../Components/CustomButton';
import styles from './styles';
export default class LeaveFormDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      reason: '',
      base_user_details: {},
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AppHeader {...this.props} centerlabel="Leave Form Details" />
        <ScrollView>
          <View style={styles._scrollShaper}>
            <Seperator height={20} />
            <CustomCalender
              placeholder=" "
              label="Leave Date From"
              //   onChangeDate={this._handledate}
            />
            <Seperator height={20} />
            <CustomCalender
              label="Leave Date To"
              //   onChangeDate={this._handledate}
            />
            <Seperator height={30} />
            <View style={styles._textInputBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Reason for leave"
                placeholderTextColor="lightgrey"
                multiline={true}
                value={this.state.reason}
                // onChangeText={this._handleReason}
              />
              <Text style={styles.errorText}>{this.state.Errorpwd}</Text>
            </View>
          </View>
          <Seperator height={50} />
        </ScrollView>
        <CustomButton centerlabel="Submit" />
      </View>
    );
  }
}
