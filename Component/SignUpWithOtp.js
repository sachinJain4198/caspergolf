import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import SocialButton from './socialButton';
import LeftArrow from '../images/svg/leftArrow.svg'
class SignUpWithOtp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hidePass1: true,
            mobNum: '',
            confirmResult: null
        }
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePass = (text) => {
        this.setState({ password: text })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                />
                <View style={styles.innerview}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={styles.image}><LeftArrow /></View></TouchableOpacity>
                    <Text style={styles.logintext}>Create Account</Text>
                </View>



                <Text style={styles.verificationText}>A verification code will be sent {'\n'} to your phone via SMS</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Mobile number"
                        placeholderTextColor="707070"
                    // onChangeText={email =>
                    //     setFormValues(prevState => ({
                    //         ...prevState,
                    //         email: email.trim(),
                    //         incorrectEmail: false,
                    //     }))}

                    // KeyboardType="email-address"
                    // // assignRef={component => {
                    // //     emailInputRef.current = component;
                    // // }}
                    // onBlur={() => { email.length > 0 && checkField('email', 'incorrectEmail', isEmailValid) }}
                    />

                </View>
                <View style={{ ...styles.inputView, position: "relative" }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter verification code"
                        placeholderTextColor="707070"
                    // onChangeText={password =>
                    //     setFormValues(prevState => ({
                    //         ...prevState,
                    //         password: password.trim(),
                    //         incorrectPassword: false,
                    //     }))
                    // }
                    />
                    <Text style={styles.counttext}>40 s</Text>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Welcome')}>
                    <Text style={styles.signtext}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.orlines}>
                    <View style={styles.lines} />
                    <Text style={styles.ortext}>OR</Text>
                    <View style={styles.lines1} />
                </View>
                <View style={styles.socialIconContainer}>
                    <SocialButton type="google" />
                    <SocialButton type="facebook" />
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={styles.termsPolicyText}>By Signing up, you agree to Golfshot<Text style={{ fontFamily: "Poppins-Bold", textDecorationLine: 'underline' }}> Terms {'\n'}  of Services</Text> and <Text style={{ fontFamily: "Poppins-Bold", textDecorationLine: 'underline' }}> Privacy Policy</Text></Text>
                </View>

            </View>



        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    verificationText: {
        textAlign: 'center',
        marginTop: '11%',
        color: "#3B3B3B",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        marginBottom: moderateScale(45),
    },
    loginButton: {
        marginTop: "6%",
        width: '90%',
        height: 44,
        backgroundColor: '#24B775',
        margin: moderateScale(18),
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center'
    },
    logintext: {
        alignSelf: 'center',
        color: 'black',
        marginTop: moderateScale(40),
        marginLeft: '18%',
        fontSize: 24,
        fontFamily: "Poppins-SemiBold"
    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    ortext: {
        alignSelf: 'center',
        paddingHorizontal: 8,
        color: "#999999",
        fontFamily: "Poppins-Light",
        fontSize: 14
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateScale(15)
    },
    image: {
        marginTop: moderateScale(45),
        width: scale(20),
        height: verticalScale(20),
        marginLeft: moderateScale(20)
    },
    innerview: {
        flexDirection: 'row',
        marginTop: moderateScale(20)
    },

    orlines: {
        flexDirection: 'row',
        marginTop: moderateScale(15)
    },
    lines: {
        backgroundColor: '#EDEDED',
        height: 1,
        flex: 1,
        alignSelf: 'center',
        marginLeft: 18
    },
    lines1: {
        backgroundColor: '#EDEDED',
        height: 1,
        flex: 1,
        alignSelf: 'center',
        marginRight: 18
    },

    termsPolicyText: {
        flex: 1,
        color: "#000000",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        textAlign: "center",
    },
    counttext: {
        position: 'absolute',
        color: '#24B775',
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        right: 10,
    },
    socialIconContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        width: "90%",
        height: 44,
        marginVertical: 10,
        marginHorizontal: "5%",
        justifyContent: "center",
        alignContent: "center",
    },
    textInput: {
        height: '100%',
        flex: 1,
        width: '100%',
        padding: 10,
        marginRight: "auto",
        fontFamily: "Poppins-Light",
        fontSize: 14,
    },
});

export default SignUpWithOtp;

