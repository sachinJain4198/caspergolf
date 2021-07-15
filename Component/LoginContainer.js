import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { scale, verticalScale, moderateScale } from '../Component/Scale';
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
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.image}><LeftArrow />
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
                    flagButtonStyle={styles.flagButtonStyle}

                    countryPickerButtonStyle={styles.countryPickerButtonStyle

                    }
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
        height: verticalScale(44),
        backgroundColor: '#24B775',
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 30
    },

    logintext: {
        marginTop: verticalScale(30),
        color: 'black',
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
        fontFamily: "Poppins-SemiBold",
    },
    phoneInput: {
        borderWidth: 1,
        marginTop: verticalScale(80),
        width: '90%',
        height: verticalScale(44),
        justifyContent: 'center',
        alignItems: 'center',
        margin: verticalScale(18),
        borderColor: '#D8D8D8',

    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    simpletext: {
        alignSelf: 'center',
        marginTop: verticalScale(20),
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    email: {
        color: '#24B775',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    image: {
        marginTop: verticalScale(35),
        width: scale(20),
        height: scale(20),
        marginLeft: verticalScale(20),
        zIndex: 1,
        position: "absolute"
    },
    innerview: {
        flexDirection: 'row',
        marginTop: verticalScale(20)
    },
    containerStyle: {
        width: '90%',
        height: verticalScale(44),
        alignSelf: 'center',
        marginTop: verticalScale(50),
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
        height: verticalScale(44),
        alignSelf: 'center',
        marginTop: verticalScale(20),
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    textInputStyle: {
        // backgroundColor:'red',
        height: verticalScale(44),
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        // marginTop: moderateScale(3)
    },
    placeholderStyle: {
        height: verticalScale(44),
        fontFamily: "Poppins-Light",
        fontSize: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

    },
    flagButtonStyle: {
        width: 73,
        borderRadius: 0,
    }
});


export default LoginContainer;

