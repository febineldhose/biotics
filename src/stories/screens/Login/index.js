import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  BackHandler,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import styles from './styles';
import {apis} from '../../../container/config';
import {SCREENS} from '../config';
const BLUE = '#2481D4';

export default class Login extends Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      mail: '',
      Password: '',
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    //this.getDataFromStorage()

    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    if (this.props.navigation.isFocused()) {
      BackHandler.exitApp();
      return true;
    }
  }
  handleFocus = event => {
    this.setState({isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };
  handleBlur = event => {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  clearText() {
    this.setState({
      mail: '',
      Password: '',
    });
  }
  submitDetails = async () => {
    const body = {
      email: this.state.mail,
      password: this.state.Password,
    };
    this.props.onlogin(body);
    this.setState({isloading: true});
    if (this.state.mail == '') {
      this.setState({Errorph: 'Please fill the email'});
      return;
    } else {
      this.setState({Errorph: ''});
    }

    if (this.state.Password == '') {
      this.setState({Errorpwd: 'Please fill the passsword'});
      return;
    } else {
      this.setState({Errorpwd: ''});
    }
    this.setState({loading: true});
    Keyboard.dismiss();

    return fetch(apis.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.mail,
        password: this.state.Password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        // console.log('append', json)
        // console.log('error', json.Status)
        this.setState({isloading: false});
        console.warn(json);

        if (json.Message == 'Login Success') {
          AsyncStorage.setItem('isLogin', JSON.stringify(json));
          // AsyncStorage.setItem('credential', JSON.stringify(json));
          //must call reducer
          // this.props.navigation.navigate(SCREENS.Home);
          console.log('login successfully', json);
          // Toast.show('login Successfully', Toast.SHORT);

          // this.clearText();
        } else {
          //alert('error')
          Toast.show('Invalid id or password', Toast.SHORT);
        }

        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };
  handleFocus = event => {
    this.setState({isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };
  handleBlur = event => {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const {isFocused} = this.state;
    const {onFocus, onBlur, ...otherProps} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#4093F0" barStyle="default" />
        <View style={styles.containertop}>
          <Text style={styles.title}>Biotics</Text>
        </View>
        <KeyboardAvoidingView style={styles.containerbottom}>
          <View style={styles.textInputContainer}>
            <TextInput
              value={this.state.mail}
              onChangeText={mail => this.setState({mail})}
              placeholder={'Email'}
              style={styles.InputText}
              selectionColor={BLUE}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              {...otherProps}
            />
          </View>
          <View style={{width: '100%'}}>
            <Text style={styles.errorText}>{this.state.Errorph}</Text>
          </View>
          <View style={styles.textInputContainer2}>
            <TextInput
              value={this.state.Password}
              onChangeText={Password => this.setState({Password})}
              style={styles.InputText}
              selectionColor={BLUE}
              placeholder="Password"
              secureTextEntry={true}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              {...otherProps}
            />
          </View>
          <View style={{width: '100%'}}>
            <Text style={styles.errorText}>{this.state.Errorpwd}</Text>
          </View>
          <Text style={styles.forgotPassword}>Forgot your password</Text>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.submitDetails()}>
              <Text style={styles.signinText}>
                {this.props.isLoading ? 'SIGNING IN...' : 'SIGN IN'}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
