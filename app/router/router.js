import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreenView from '../screens/splash';
import SampleScreenView from '../screens/sample';
import LoginScreenView from '../screens/login';

const MainAppStack = createStackNavigator(
  {
    SampleScreen: SampleScreenView,
  },
  {
    initialRouteName: 'SampleScreen',
  },
);

const AuthStack = createStackNavigator(
  {
    LoginScreen: LoginScreenView,
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

const AuthSwitch = createSwitchNavigator({
  AuthStackScreen: AuthStack,
  MainAppStackScreen: MainAppStack,
});

const SplashSwitch = createSwitchNavigator(
  {
    SplashScreen: SplashScreenView,
    AuthSwitchScreen: AuthSwitch,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

export default createAppContainer(SplashSwitch);
