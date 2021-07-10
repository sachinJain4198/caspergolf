import React from 'react';
import { Text } from 'react-native';

import { View, StyleSheet } from 'react-native';
import SvgCssUri from 'react-native-svg';

import SplashScreen from 'react-native-splash-screen'
import Logo from '../images/svg/logo.svg'

export default class SplashScreen1 extends React.Component {

    componentDidMount() {
        SplashScreen.hide();
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 1500)
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    images: {
      
        width: '100%',
        flex: 1,
    }
})