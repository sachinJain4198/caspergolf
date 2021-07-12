import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import LeftArrow from '../images/svg/leftArrow.svg'


class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            phoneInput: null
        }
    }

    onPressFlag() {
        this.myCountryPicker.open()
    }

    selectCountry(country) {
        this.phone.selectCountry(country.iso2)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                />
                <View style={styles.innerview}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}><View style={styles.image}><LeftArrow /></View>
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Login</Text>
                </View>

                <Text style={styles.verificationText}>A verification code will be sent {'\n'} to your phone via SMS</Text>
                <PhoneInput
                    ref={this.state.phoneInput}
                    defaultValue={this.state.value}
                    defaultCode="IN"
                    layout="first"
                    onChangeText={(text) => {
                        this.setState({ value: text });
                    }}
                    onChangeFormattedText={(text) => {
                        this.setState({ value: text })
                    }}
                    placeholder="Mobile No"
                    containerStyle={styles.containerStyle}
                    textContainerStyle={styles.textContainerStyle}
                    codeTextStyle={styles.codeTextStyle}
                    textInputStyle={this.state.value.length ? { ...styles.textInputStyle } : { ...styles.textInputStyle, ...styles.placeholderStyle }}

                />

                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('LoginWithEmail')}>
                    <Text style={styles.signtext}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.simpletext}>Login with <Text style={styles.email}>Email</Text> </Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#FFFFFF',
        backgroundColor: '#FFFFFF'
    },
    verificationText: {
        textAlign: 'center',
        marginTop: '13%',
        color: "#3B3B3B",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 18,
    },
    loginButton: {
        width: '90%',
        height: 44,
        backgroundColor: '#24B775',
        margin: verticalScale(18),
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 35
    },
    logintext: {
        color: 'black',
        marginTop: moderateScale(40),
        marginLeft: '32%',
        fontSize: 24,
        fontFamily: "Poppins-SemiBold"
    },
    phoneInput: {
        borderWidth: 1,
        marginTop: verticalScale(80),
        width: '90%',
        height: moderateScale(45),
        justifyContent: 'center',
        alignItems: 'center',
        margin: verticalScale(18),
        borderColor: '#D8D8D8',

    },
    signtext: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    simpletext: {
        alignSelf: 'center',
        marginTop: 3,
        color: '#000000',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    email: {
        color: '#24B775',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    image: {
        marginTop: verticalScale(45),
        width: scale(20),
        height: verticalScale(20),
        marginLeft: moderateScale(20)
    },
    innerview: {
        flexDirection: 'row',
        marginTop: verticalScale(20)
    },
    containerStyle: {
        width: '90%',
        height: 44,
        alignSelf: 'center',
        marginTop: 65,
        borderColor: '#D8D8D8',
        borderWidth: 1,
        borderRadius: 5
    },
    textContainerStyle: {
        backgroundColor: '#FFFFFF',
        borderLeftWidth: 1,
        borderColor: '#D8D8D8',
    },
    codeTextStyle: {
        height: 40,
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    textInputStyle: {
        height: 80,
        marginTop: 2,
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    placeholderStyle: {
        fontFamily: "Poppins-Light",
    }
});

export default LoginContainer;