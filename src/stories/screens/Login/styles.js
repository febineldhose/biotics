import {StyleSheet} from 'react-native';
import {appColors} from '../../../Theme/appColors';
import {appfontFamily} from '../../../Theme/appfontFamily';
import {appFontSize} from '../../../Theme/appfontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.LIGHT_BLUE,
  },
  containertop: {
    flex: 0.3,
    backgroundColor: appColors.LIGHT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerbottom: {
    flex: 0.7,
    backgroundColor: appColors.WHITE,
    borderTopStartRadius: 90,
    borderBottomEndRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -2,
  },
  title: {
    fontSize: 25,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
    //fontWeight:'bold',
  },
  InputText: {
    width: '80%',
    height: 45,
    padding: 10,
    //alignSelf: 'center',
    color: appColors.BLACK,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
    marginLeft: 10,
    //marginBottom: 10,
    // backgroundColor: '#ecf0f1',
  },
  showpassword: {
    height: 20,
    width: 20,
  },
  popup: {
    borderRadius: 10,
    position: 'absolute',
    height: 230,
    width: '80%',
    zIndex: 2,
    paddingBottom: 10,
    backgroundColor: appColors.WHITE,
    elevation: 20,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
    zIndex: -3,
  },
  textInput: {
    height: 50,
    width: '80%',
    borderColor: '#D9E4EC',
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    color: '#D9E4EC',
    borderBottomWidth: 2,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
    margin: 5,
  },
  caption: {
    color: '#C8E7FA',
    fontSize: 15,
    fontWeight: '600',
  },
  button: {
    backgroundColor: appColors.LIGHT_BLUE,
    height: 50,
    width: 300,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  button1: {
    backgroundColor: appColors.WHITE,
    height: 50,
    width: 300,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  signinText: {
    color: 'white',
    fontSize: 18,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
  },
  signinText1: {
    color: 'black',
    fontSize: 18,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
  },
  forgotPassword: {
    margin: 10,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
  },
  textInputContainer: {
    flexDirection: 'row',
    borderColor: '#D5DBDB',
    borderWidth: 1,
    borderRadius: 10,
    //backgroundColor:'red',
    width: '95%',
  },
  textInputContainer2: {
    flexDirection: 'row',
    borderColor: '#D5DBDB',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    //backgroundColor:'red',
    width: '95%',
  },
  errorText: {
    color: 'red',
    textAlign: 'auto',
    //marginLeft: 25,
    paddingLeft: 20,
    fontFamily: appfontFamily.OBJ_SEMIBOLD,
  },
});

export default styles;
