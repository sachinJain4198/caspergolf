import React from 'react';

import {View,Text,Image} from 'react-native';
import Styles from './Style';
import SplashScreen from 'react-native-splash-screen'

export default class SplashScreen1 extends React.Component{

    componentDidMount(){
        SplashScreen.hide();
        setTimeout(()=>{
            this.props.navigation.navigate('Login')
        },1500)
    }

    render(){
        return(
            <View style={Styles.mainContainer}>
                <Image source={require('../images/logo.jpeg')} style={{width:'98%'}}/>
               {/* <Text>CASPER GOLF</Text> */}
            </View>
        )
    }
}