import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import moment from 'moment';
import styles from './styles';
import AppHeader from '../../../Components/header';
import Seperator from '../../../Components/Seperator';
import Wrapper from '../../../Components/Wrapper';
import ListContainer from '../../../Components/ListContainer';
import Remarks from '../../../Components/Remarks';
import CustomButton from '../../../Components/CustomButton';
import {appColors} from '../../../Theme/appColors';
import {listcolors} from '../../../Components/ListContainer/styles';
import CustomCalender from '../../../Components/Calender';
import CustomTextinput from '../../../Components/CustomTextinput';
export default class CreateTourPlan extends Component {
  constructor() {
    super();
    this.state = {currentdate: moment().format('YYYY-MM-DD')};
  }

  render() {
    const {station_type} = this.state;
    return (
      <View style={styles.container}>
        <AppHeader {...this.props} centerlabel="Tour Plan Details" />
        <ScrollView>
          <View style={styles._scrollShaper}>
            <Seperator height={30} />
            <CustomCalender label="Tour Date" onChangeDate={this._handledate} />
            <Seperator height={30} />
            <CustomTextinput
              placeholder="No. of Doctor's planned"
              inputStyle={styles._inputStyle}
            />
            <Seperator height={30} />
            <CustomTextinput
              placeholder="No. of chemist planned"
              inputStyle={styles._inputStyle}
            />
            <Seperator height={30} />
            <ListContainer
              headinglabel="Station Details"
              typeDetails={[
                {
                  type: 'Stn Type',
                  placeholder: 'Select station type',
                  data: station_type,
                  isDropDown: true,
                },
                {
                  type: 'Stn Name',
                  placeholder: 'Select station name',
                  isDropDown: true,
                },
              ]}
              addmoreStyle={{backgroundColor: appColors.LIGHT_BLUE}}
              headingStyle={{backgroundColor: appColors.LIGHT_BLUE}}
              onItemChanged={this._handleitemChange}
            />
            <Remarks onChangeText={this._handleRemarks} />
            <Seperator height={50} />
          </View>
        </ScrollView>
        <CustomButton onPress={this._handleAdd_tour} centerlabel="Submit" />
      </View>
    );
  }
}
