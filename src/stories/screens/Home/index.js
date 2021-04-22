import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
  BackHandler,
  Alert,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {appConfig} from '../../../../config/config';
import {StackActions, NavigationActions} from 'react-navigation';
import {
  user,
  booking,
  daily_reports,
  discussion,
  fileupload,
  leaveform,
  literature_report,
  notification,
  sample_reports,
  sponsership,
  tourplan,
  logouticon,
} from '../../../../assets/staticImages';
import {appColors} from '../../../Theme/appColors';
import {appfontFamily} from '../../../Theme/appfontFamily';
import {appFontSize} from '../../../Theme/appfontsize';
import {SCREENS} from '../config';
import {GET_COUNTER_NAME} from '../../../container/DailyReportContainer/action';

const deviceHeight = Dimensions.get('window').height;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {animation: new Animated.Value(9)};
  }
  scrollY = new Animated.Value(0);
  pan = new Animated.ValueXY();
  diffClamp = Animated.diffClamp(this.scrollY, 0, 120);
  translateY = this.diffClamp.interpolate({
    inputRange: [-155, 140],
    outputRange: [100, -120],
    extrapolate: 'clamp',
  });
  _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({y: this.pan.y._value});
    },
    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    },
    onPanResponderMove: Animated.event([null, {dy: this.pan.y}]),
  });

  logout = async () => {
    Alert.alert(
      'Biotics',
      'Are you sure you want to log out?',
      [
        {
          text: 'Yes',
          onPress: async () => {
            this.props.logout();
          },
        },
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#4093F0" barStyle="default" />

        <Animated.View
          {...this._panResponder.panHandlers}
          style={{
            height: deviceHeight * 0.6,
            backgroundColor: '#4093F0',
            borderBottomLeftRadius: 120,
            borderBottomRightRadius: 120,
            // position: 'absolute',
            width: '100%',
            transform: [
              {
                translateY: this.pan.y.interpolate({
                  inputRange: [-100, 0],
                  outputRange: [-40, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={user} />
          <View style={{marginLeft: 30}}>
            <Text
              style={styles.profileName}
              onPress={() => {
                console.warn('jhgfd');
              }}>
              John Doe{' '}
            </Text>
            <Text style={styles.profileEmail}>jhonnydoe@gmail.com </Text>
            <Text style={styles.profileCategory}>ASM </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.logout}
          style={{
            padding: 7,
            alignSelf: 'center',
            position: 'absolute',
            right: '4%',
            top: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"
            source={logouticon}
          />
        </TouchableOpacity>
        <Animated.View
          // {...this._panResponder.panHandlers}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            marginTop: 200,
            //backgroundColor:'red'

            // transform: [
            //   {
            //     translateY: this.pan.y.interpolate({
            //       inputRange: [-40, 0],
            //       outputRange: [-50, 40],
            //       extrapolate: 'clamp',
            //     }),
            //   },
            // ],
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              backgroundColor: 'white',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 10,
              //marginBottom:20,
              //height:'50%'
              // paddingBottom: 15,
            }}>
            <View style={styles._scrollViewSubBox}>
              <CategoryItems
                style={{flex: 1, marginLeft: 10, marginRight: 10}}
                categoryName={'Daily Call Report'}
                image={daily_reports}
                onPress={() => {
                  this.props.navigation.navigate(SCREENS.DailyReport);
                }}
              />

              <CategoryItems
                style={{marginRight: 10, flex: 1}}
                categoryName={'Request for Sample & Literature'}
                image={literature_report}
                onPress={() => {
                  this.props.navigation.navigate(SCREENS.SampleandLiterature);
                }}
              />
            </View>
            <View style={styles._scrollViewSubBox}>
              <CategoryItems
                style={{flex: 1, marginLeft: 10, marginRight: 10}}
                categoryName={'Sponsership Request'}
                image={sponsership}
                onPress={() => {
                  this.props.navigation.navigate(SCREENS.SponserShip);
                }}
              />
              <CategoryItems
                style={{marginRight: 10, flex: 1}}
                categoryName={'Sales Data Uploading'}
                image={fileupload}
                onPress={() => {
                  this.props.navigation.navigate(SCREENS.SalesData);
                }}
              />
            </View>
            <View style={styles._scrollViewSubBox}>
              <CategoryItems
                style={{flex: 1, marginLeft: 10, marginRight: 10}}
                categoryName={'Tour Plan'}
                image={tourplan}
                onPress={() => {
                  this.props.navigation.navigate(SCREENS.TourPlan);
                }}
              />
              <CategoryItems
                style={{marginRight: 10, flex: 1}}
                categoryName={'Leave Request'}
                image={leaveform}
                onPress={() => {
                  this.props.navigation.navigate(SCREENS.LeaveForm);
                }}
              />
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

function CategoryItems(props) {
  const {categoryName, image, onPress, style} = props;
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image
        style={{
          width: 40,
          height: 40,
          padding: 20,
          alignSelf: 'center',
        }}
        resizeMode="contain"
        source={image}
      />
      <View
        style={{
          backgroundColor: '#00000029',
          borderRadius: 5,
          marginTop: 10,
          padding: 5,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 7,
          //backgroundColor:'red',
          height: 50,
        }}>
        <Text style={styles.cardtext}>{categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'green',
  },
  containertop: {
    flex: 0.6,
    backgroundColor: appColors.WHITE,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  containerbottom: {
    flex: 0.4,
    backgroundColor: appColors.LIGHT_BLUE,
    justifyContent: 'space-between',
    zIndex: -2,
    paddingLeft: 20,
    paddingRight: 30,
  },
  topcontainer: {
    height: '18%',
    width: '100%',
    backgroundColor: appColors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  list: {
    height: 18,
    width: 17,
  },
  bellIcon: {
    height: 22,
    width: 20,
    //marginLeft: 300,
  },
  headerContent: {
    padding: 30,
    //alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    //backgroundColor:'red'
    position: 'absolute',
    top: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: appColors.WHITE,
    marginBottom: 10,
  },
  // cardtext: {
  //   fontSize: 18,
  //   color: 'white',
  //   fontWeight: 'bold',
  //   padding: 20,
  // },
  profileName: {
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
    fontSize: appFontSize.HEAD_22,
    color: appColors.WHITE,
    //fontWeight: 'bold',
  },
  profileEmail: {
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: 15,
    color: 'white',
  },
  profileCategory: {
    fontFamily: appfontFamily.OBJ_REGULAR,
    fontSize: 12,
    color: 'white',
  },
  cardtext: {
    fontFamily: appfontFamily.OBJ_REGULAR,
    color: '#0066DA',
    alignSelf: 'center',
    fontSize: 12,
  },
  _scrollViewSubBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    //backgroundColor:'blue',
    // marginBottom:30

    // width: '100%',
    // height: '30%',
  },
});
