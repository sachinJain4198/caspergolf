import React from 'react';

import {View,StyleSheet,Image,StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { scale, verticalScale, moderateScale } from '../Component/Scale';

export default class SplashScreen1 extends React.Component{

    componentDidMount(){
        SplashScreen.hide();
        setTimeout(()=>{
            this.props.navigation.navigate('Login')
        },1500)
    }

    render(){
        return(
            
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image source={require('../images/splash.jpeg')} style={styles.images} resizeMode='stretch'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    images:{
        width:scale(350),
        height:verticalScale(700),
        backgroundColor:'#707070'
    }
})