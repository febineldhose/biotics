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
import AddContainer from './AddContainer';
import CustomCalender from '../../../Components/Calender';
import {appColors} from '../../../Theme/appColors';
export default class CreateSalesData extends Component {
  constructor() {
    super();
    this.state = {currentdate: moment().format('YYYY-MM-DD')};
  }

  render() {
    return (
      <View style={styles.container}>
        <AppHeader {...this.props} centerlabel="Sales Data Uploading" />

        <ScrollView style={styles.container}>
          <Wrapper width={'90%'}>
            <Seperator height={20} />
            <CustomCalender label="Date" />
            <ListContainer
              headinglabel="Distributor Details"
              typeDetails={[
                {
                  type: 'Distributor',
                  placeholder: 'Select name',
                  isDropDown: true,
                },
              ]}
              disable_addmore={true}
              // flat_listStyle={{backgroundColor: 'transparent'}}
              headingStyle={{backgroundColor: appColors.LIGHT_BLUE}}
            />
            <Seperator height={20} />
            <AddContainer
              labelhead={'Area wise statement'}
              placeholder="Upload  File"
              onChangeData={() => {}}
            />

            <Seperator height={20} />
            <AddContainer
              labelhead={'Stock and sales report'}
              placeholder="Upload  File"
              onChangeData={() => {}}
            />

            <Seperator height={20} />
            <AddContainer
              labelhead={'Batch wise stock details'}
              placeholder="Upload  File"
              onChangeData={() => {}}
            />

            <Seperator height={20} />
            <AddContainer
              labelhead={'Free Claim statement'}
              placeholder="Upload File"
              onChangeData={() => {}}
            />
            <Remarks />
          </Wrapper>
          <Seperator height={70} />
        </ScrollView>
        <CustomButton centerlabel="Upload" />
      </View>
    );
  }
}
