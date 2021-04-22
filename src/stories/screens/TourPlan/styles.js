import {StyleSheet} from 'react-native';
import {appColors} from '../../../Theme/appColors';
import {appfontFamily} from '../../../Theme/appfontFamily';
import {appFontSize} from '../../../Theme/appfontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.WHITE,
  },
  containertop: {
    height: '8%',
    width: '100%',
    backgroundColor: appColors.LIGHT_BLUE,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  header: {
    fontSize: 18,
    color: appColors.WHITE,
    fontFamily: appfontFamily.OBJ_REGULAR,
    marginHorizontal: 5,
  },
  back: {
    height: 20,
    width: 20,
  },
  adding: {
    height: 22,
    width: 22,
    paddingRight: 10,
  },
  searchbar: {
    flexDirection: 'row',
    //height: '8%',
    //width: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    //paddingHorizontal:10,
    borderColor: '#B3B5B4',
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    //marginTop:5,
    //marginLeft:5
  },
  searchimg: {
    height: 15,
    width: 15,
    //padding: 8
  },
  textinput: {
    fontSize: 16,
    //marginHorizontal:10
  },
  containerbottom: {
    height: '100%',
    padding: 10,
  },
  cardtext1: {
    fontSize: 13,
    color: 'black',
    marginLeft: 2,
    fontFamily: appfontFamily.OBJ_REGULAR,
    //width: '70%'
  },
  cardtext2: {
    fontSize: 10,
    color: 'black',
    marginLeft: 2,
    fontFamily: appfontFamily.OBJ_REGULAR,
    width: '70%',
  },
  // cardtext2: {
  //     },
  cardtext3: {
    fontSize: 11,
    color: 'black',
    fontFamily: appfontFamily.OBJ_REGULAR,
  },
  midContView: {
    //borderWidth: 1,
    //elevation:1,
    width: '100%',
    borderRadius: 8,
    marginVertical: 5,
    height: 80,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    //backgroundColor:'red',
    //borderColor: '#B3B5B4',
  },
  doctor: {
    justifyContent: 'center',
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  card3: {
    //backgroundColor: '#E3E6E7',
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    // flex: 1,
    margin: 4,
    width: '95%',
    //height: 70,
  },
  department: {
    fontSize: 10,
    color: 'black',
    textAlign: 'left',
    fontFamily: appfontFamily.OBJ_REGULAR,
  },
  phone: {
    fontSize: 12,
    color: 'black',
    textAlign: 'left',
    fontFamily: appfontFamily.OBJ_REGULAR,
  },
  text: {
    // marginLeft: 5,
    // marginRight: 5,
    // alignItems: 'center',
    fontSize: 12,
    color: '#000',
    fontFamily: appfontFamily.OBJ_REGULAR,
    // paddingTop: 2,
    // paddingBottom: 1,
    // alignSelf: 'center',
    // paddingLeft: 5,
    // paddingRight: 5,
    // //fontFamily:'Noto Sans V2',
    // textAlign: 'justify',
  },
  titleStyle: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 250,
    fontFamily: appfontFamily.OBJ_REGULAR,
  },
});
export default styles;
