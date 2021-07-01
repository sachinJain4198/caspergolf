
import React from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import LoginContainer from "../Component/LoginContainer";
import MyTabs from './BottomTab';
import About from '../Component/About';
import SplashScreen1 from '../Component/SplashScreen1';
import LoginWithEmail from '../Component/LoginWithEmail';
import SignUpWithOtp from '../Component/SignUpWithOtp';
import Welcome from '../Component/Welcome';

export default class StackNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const StackApp = createStackNavigator({
  SplashScreen:{
    screen:SplashScreen1
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: MyTabs
  },
  About:{
    screen:About
  },
  LoginContainer:{
    screen:LoginContainer
  },
  LoginWithEmail:{
    screen:LoginWithEmail
  },
  SignUpWithOtp:{
    screen:SignUpWithOtp
  },
  Welcome:{
    screen:Welcome
  }
},{
  headerMode:'none'
});

const AppContainer = createAppContainer(StackApp);

