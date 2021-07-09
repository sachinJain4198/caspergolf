
import React from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import LoginContainer from "../Component/LoginContainer";
import MyTabs from './BottomTab';
import Courses from '../Component/Courses';
import SplashScreen1 from '../Component/SplashScreen1';
import LoginWithEmail from '../Component/LoginWithEmail';
import SignUpWithOtp from '../Component/SignUpWithOtp';
import Welcome from '../Component/Welcome';
import Stats from '../Component/Stats';
import Round from '../Component/Round';

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
  Courses:{
    screen:Courses
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
  }, 
  Stats:{
    screen:Stats
  },
  Round:{
    screen:Round
  },
},{
  headerMode:'none'
});

const AppContainer = createAppContainer(StackApp);

