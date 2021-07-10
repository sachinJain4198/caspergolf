import React from 'react';
import { Text } from 'react-native';

import { View, StyleSheet } from 'react-native';
import SvgCssUri from 'react-native-svg';

import SplashScreen from 'react-native-splash-screen'
import MainLogo  from '../images/svg/main.svg'

export default class SplashScreen1 extends React.Component {

    componentDidMount() {
        // SplashScreen.hide();
        // setTimeout(() => {
        //     // this.props.navigation.navigate('Login')
        // }, 1500)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>sachin</Text>
               <MainLogo/>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    images: {
        width: '98%'
    }
})