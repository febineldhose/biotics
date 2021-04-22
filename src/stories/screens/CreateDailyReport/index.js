import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';
import {listcolors} from '../../../Components/ListContainer/styles';
import Remarks from '../../../Components/Remarks';
import {
  _distruButorname,
  _counter_Type,
  _counter_name,
  _doctor_name,
} from '../../../../config/Apiconfig/DailyReport';
import Wrapper from '../../../Components/Wrapper';
import AppHeader from '../../../Components/header';
import Seperator from '../../../Components/Seperator';
import CustomButton from '../../../Components/CustomButton';
import CustomCalender from '../../../Components/Calender';
import {appColors} from '../../../Theme/appColors';
import CustomListView from './CustomListView';
export default class CreateDailyreport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSelectedCountertype = selectedCounterType => {
    this.setState({selectedCounterType});
  };
  _handleselecedtypeofwork = selectedtypeOfWork => {
    this.setState({selectedtypeOfWork});
  };
  DropDownDataMaker = value => {
    if (value ? value : false) {
      let data = [];
      value?.map(item => {
        data.push({id: item.id, value: item.counter_type});
      });
      return data;
    }
  };
  render() {
    const {counter_Type, selectedtypeOfWork, selectedCounterType} = this.state;
    const isWorking = selectedtypeOfWork == 'Working';
    const SeperatorHeight = isWorking ? 15 : 0;
    const hideDoctor =
      selectedCounterType == 'CHEMIST' || selectedCounterType == 'Distributor';
    return (
      <View style={styles.container}>
        <AppHeader {...this.props} centerlabel="Create Daily Report" />
        <ScrollView>
          <View style={{width: '100%', alignSelf: 'center'}}>
            <View style={{height: 25}} />
            <Wrapper width="90%">
              <CustomCalender label="Discussed Date" />
            </Wrapper>

            <CustomListView
              typeDetails={[
                {
                  type: 'Type of work',
                  placeholder: 'Select work type',
                  data: TYPEOFWORK,
                  isDropDown: true,
                  onItemChanged: this._handleselecedtypeofwork,
                },
                isWorking && {
                  type: 'Cntr Type',
                  placeholder: 'Select Counter Type',
                  data: this.DropDownDataMaker(
                    this.props.counterTypes?.counterTypes,
                  ),
                  isDropDown: true,
                  onItemChanged: this._handleSelectedCountertype,
                },
                isWorking && {
                  type: 'Cntr Name',
                  placeholder: 'Select Counter Name',
                  isDropDown: true,
                },
              ]}
              disable_addmore={true}
              color={appColors.LIGHT_BLUE}
              listStyle={{backgroundColor: 'transparent'}}
            />
            <Seperator height={SeperatorHeight} />
            <Wrapper width={'90%'}>
              <CustomListView
                isheaderRepeat={true}
                disable_addmore={!isWorking ? !isWorking : hideDoctor}
                headinglabel={
                  isWorking && !hideDoctor ? 'Doctor Details' : undefined
                }
                typeDetails={[
                  isWorking &&
                    !hideDoctor && {
                      type: 'Specialisation',
                      placeholder: 'Select Specialisation',
                      isDropDown: true,
                    },
                  isWorking &&
                    !hideDoctor && {
                      type: 'Dr. Name',
                      placeholder: 'Select Name',
                      isDropDown: true,
                    },
                ]}
                color={appColors.LIGHT_BLUE}
                headingStyle={{marginTop: 10}}
                listStyle={[
                  !isWorking && {borderRadius: 10},
                  isWorking && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  },
                  hideDoctor && {
                    paddingVertical: 0,
                    backgroundColor: 'transparent',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  },
                ]}>
                <Seperator height={SeperatorHeight} />
                <CustomListView
                  disabled={!isWorking}
                  headinglabel="LBL Details"
                  typeDetails={[
                    {
                      type: 'LBL Name',
                      placeholder: 'Select name',
                      isDropDown: true,
                    },
                    {
                      type: 'No. Of Units',
                      placeholder: 'Units',
                      isTextInput: true,
                    },
                  ]}
                  color={listcolors.BACKGROUND_COLOR_2}
                />
                <Seperator height={SeperatorHeight} />
                <CustomListView
                  disabled={!isWorking}
                  headinglabel="Sample Details"
                  typeDetails={[
                    {
                      type: 'Sample Name',
                      placeholder: 'Select name',
                      data: counter_Type,
                      isDropDown: true,
                    },
                    {
                      type: 'No. Of Units',
                      placeholder: 'Units',
                      isTextInput: true,
                    },
                  ]}
                  color={listcolors.BACKGROUND_COLOR_3}
                />
                <Seperator height={SeperatorHeight} />
                <CustomListView
                  disabled={!isWorking}
                  typeDetails={[
                    {
                      type: 'POB Value',
                      placeholder: 'Select value',
                      isTextInput: true,
                    },
                  ]}
                  disable_addmore={true}
                  color={listcolors.BACKGROUND_COLOR_4}
                />
                <Remarks
                  style={{
                    backgroundColor: '#EBEBEB',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 20,
                  }}
                />
              </CustomListView>
            </Wrapper>
            <Seperator height={SeperatorHeight} />
          </View>
          <Seperator height={isWorking ? 50 : 0} />
        </ScrollView>
        <CustomButton centerlabel="Submit" />
      </View>
    );
  }
}
const TYPEOFWORK = [
  {value: 'Working', id: 1},
  {value: 'Holiday', id: 2},
  {value: 'Meeting or Training', id: 3},
];
