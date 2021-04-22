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
export default class CreateSampleandLiterature extends Component {
  constructor() {
    super();
    this.state = {currentdate: moment().format('YYYY-MM-DD')};
  }

  render() {
    const {currentdate} = this.state;
    return (
      <View style={styles.container}>
        <AppHeader
          {...this.props}
          centerlabel="Request for Smpls and literature"
        />
        <ScrollView>
          <Seperator height={20} />
          <Wrapper width={'90%'}>
            <View style={styles._dateView}>
              <Text style={styles._datetext}>Date</Text>
              <Text style={styles._datetext}>{currentdate}</Text>
            </View>
            <Seperator height={10} />
            <ListContainer
              typeDetails={[
                {
                  type: 'LBL Name',
                  placeholder: 'Select name',
                  isDropDown: true,
                },
                {
                  type: 'No. of Units',
                  placeholder: 'units',
                  isTextInput: true,
                },
              ]}
              flat_listStyle={{borderRadius: 0}}
              addmoreStyle={{backgroundColor: appColors.LIGHT_BLUE}}
              headingStyle={{backgroundColor: appColors.LIGHT_BLUE}}
            />
            <Seperator height={15} />
            <ListContainer
              typeDetails={[
                {
                  type: 'Sample Name',
                  placeholder: 'Select name',
                  isDropDown: true,
                },
                {
                  type: 'No. of Units',
                  placeholder: 'units',
                  isTextInput: true,
                },
              ]}
              flat_listStyle={{borderRadius: 0}}
              addmoreStyle={{backgroundColor: listcolors.BACKGROUND_COLOR_3}}
              headingStyle={{backgroundColor: listcolors.BACKGROUND_COLOR_3}}
            />
            <Seperator height={20} />
            <Remarks />
          </Wrapper>
          <Seperator height={60} />
        </ScrollView>
        <CustomButton centerlabel="Submit" />
      </View>
    );
  }
}
