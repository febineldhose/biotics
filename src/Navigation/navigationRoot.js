import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../container/LoginContainer';

const rootstack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const NavigationRoot = createAppContainer(rootstack);

export default NavigationRoot;
