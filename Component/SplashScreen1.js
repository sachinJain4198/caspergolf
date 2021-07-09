import React from 'react';

import {View,StyleSheet,Image} from 'react-native';
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
            <View style={styles.container}>
                <Image source={require('../images/logo.jpeg')} style={styles.images}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    images:{
        width:'98%'
    }
})