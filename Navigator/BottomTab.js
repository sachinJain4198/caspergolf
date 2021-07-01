import React from 'react';

import {Image, Text,View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import About from '../Component/About';
import Home from '../Component/Home';
import Icon from 'react-native-vector-icons/MaterialIcons'

const MyTabs = createAppContainer(createBottomTabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            tabBarLabel:'Feeds',
            tabBarIcon: ({ tintColor }) => (
               <Image source={require('../images/newspaper.png')}/>
              ),      
        }
    },
    About:{
        screen:About,
        navigationOptions:{
            tabBarLabel:'About',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="info"
                  size={24}
                  style={{ color: tintColor }}
                />
              ),      
        }
    }
}));

export default MyTabs;