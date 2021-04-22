import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {appColors} from '../../../Theme/appColors';
import AppHeader from '../../../Components/header';
import Seperator from '../../../Components/Seperator';
import ListContainer from '../../../Components/ListContainer';
import CustomButton from '../../../Components/CustomButton';
export default class SponserShipDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {input: 'hellow'};
  }
  componentDidMount() {}
  _onlistTextinputchange = text => {
    console.warn(text);
    // this.setState({input: text});
  };
  render() {
    const {increment, value} = this.props;
    console.warn(this.props.value, 'class');

    return (
      <View style={{flex: 1, backgroundColor: appColors.WHITE}}>
        <ScrollView>
          <AppHeader
            {...this.props}
            centerlabel="SponsorShip Request Details"
          />
          <Seperator height={20} />
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              height: '100%',
            }}>
            <ListContainer
              onItemChanged={(index, data, list) => {
                console.warn(list);
              }}
              disable_addmore
              typeDetails={[
                {
                  type: 'Speciality',
                  placeholder: 'Select speciality',
                  isDropDown: true,
                  data: _data1,
                },
                {
                  type: 'Dr Name',
                  placeholder: 'Select Dr name',
                  isDropDown: true,
                  data: _data1,
                },
                {
                  type: 'Counter Name',
                  placeholder: 'Select Counter name',
                  isDropDown: true,
                  data: _data1,
                },
                {
                  type: ' ',
                  placeholder: 'Product commited',
                  isTextInput: true,
                  onChangeText: txt => {
                    console.warn(txt);
                  },
                },
                {
                  type: ' ',
                  placeholder: 'Type of SponserShip',
                  isTextInput: true,
                  onChangeText: txt => {
                    console.warn('txt');
                  },
                },
                {
                  type: ' ',
                  placeholder: 'Previuos SponserShip data & Amount',
                  isTextInput: true,
                },
                {
                  type: ' ',
                  placeholder: 'Buisness recieved after sponsership',
                  isTextInput: true,
                },
                {
                  type: ' ',
                  placeholder: 'New SponserShip Amount',
                  isTextInput: true,
                },
                {
                  type: ' ',
                  placeholder: 'New SponserShip commited date',
                  isTextInput: true,
                },
              ]}
            />
          </View>
          <Seperator height={60} />
        </ScrollView>
        <CustomButton centerlabel="Save" />
      </View>
    );
  }
}
const _data1 = [
  {value: 'No restrictions', label: 'No restrictions'},
  {value: '21 and over section', label: '21 and over section'},
  {
    value: "18's only",
    label: "18's only",
  },
  {
    value: 'Young Adult ( 18 to 21 )',
    label: 'Young Adult ( 18 to 21 )',
  },
  {value: '2 child tickets', label: '2 child tickets'},
  {value: '3 child tickets', label: '3 child tickets'},
];
