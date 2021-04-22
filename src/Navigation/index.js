import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import NavigationRoot from './navigationRoot';
import NavigationMain from './navigationMain';
import * as NavigationService from './navigationService';
import {AppStateContext} from '../context';
import {SafeAreaView} from 'react-navigation';
import {appColors} from '../Theme/appColors';
import {StyleSheet} from 'react-native';

class Navigator extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 40);
  }
  render() {
    const {state} = this.props;
    const isloggedin = state?.persistor?.isloggedIn;
    return (
      <>
        <SafeAreaView style={styles._statubar} />
        <SafeAreaView style={{flex: 1}}>
          {isloggedin ? (
            <NavigationMain
              ref={navigatorRef => {
                NavigationService.setNavigRef(navigatorRef);
              }}
            />
          ) : (
            <NavigationRoot
              ref={navigatorRef => {
                NavigationService.setNavigRef(navigatorRef);
              }}
            />
          )}
        </SafeAreaView>
      </>
    );
  }
}
export default function(props) {
  const [state] = AppStateContext();
  return <Navigator {...props} state={state} />;
}

const styles = StyleSheet.create({
  _statubar: {flex: 0, backgroundColor: appColors.LIGHT_BLUE},
});
