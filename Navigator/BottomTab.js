import React from 'react';

import {Image, Text,View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Courses from '../Component/Courses';
import Home from '../Component/Home';
import Stats from '../Component/Stats';
import Icon from 'react-native-vector-icons/MaterialIcons'

const MyTabs = createAppContainer(createBottomTabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            tabBarLabel:'Feeds',
            tabBarIcon: ({ tintColor }) => (
               <Image source={require('../images/newspaper.png')} style={{width:30,height:30}}/>
              ),      
        }
    },
    Courses:{
        screen:Courses,
        navigationOptions:{
            tabBarLabel:'Courses',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/golf-flag-and-field.png')} style={{width:30,height:30}}/>
              ),      
        }
    },
    Video:{
        screen:Stats,
        navigationOptions:{
            tabBarLabel:'Videos',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/video.png')}style={{width:30,height:30}}/>
              ),      
        }
    },
    Stats:{
        screen:Stats,
        navigationOptions:{
            tabBarLabel:'Stats',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/goal.png')} style={{width:30,height:30}}/>
              ),      
        }
    },
    Profile:{
        screen:Stats,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../images/user.png')} style={{width:30,height:30}} resizeMode='contain'/>
              ), 
                
        }
    }
},{
    tabBarOptions:{
        style:{
           borderTopLeftRadius:30,
           borderTopRightRadius:30,
           height:80,
           justifyContent:'center',
          
        },
       tabStyle:{
        marginBottom:14
       },
       activeTintColor:'#24B775'
    }
}));

export default MyTabs;