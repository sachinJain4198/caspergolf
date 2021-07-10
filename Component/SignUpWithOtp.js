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
                <View style={styles.emailtext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.emailtext1}
                        placeholder="Enter your Mobile number"
                        value={this.state.email}
                        onChangeText={this.handleEmail}
                    />
                </View>

                <View style={styles.passtext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.passtext1}
                        placeholder="Enter verification code"
                        value={this.state.password}
                        onChangeText={this.handlePass}
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
                <View style={{ flex: 1, position: 'absolute', bottom: 10 }}>
                    <Text style={styles.termsPolicyText}>By Signing up, you agree to Golfshot<Text style={{ fontFamily: "Poppins-Bold", textDecorationLine: 'underline' }}> Terms of Services </Text>and<Text style={{ fontFamily: "Poppins-Bold", textDecorationLine: 'underline' }}> Privacy Policy</Text></Text>
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
        marginTop: '15%',
        color: "#3B3B3B",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 18,
    },
    loginButton: {
        marginTop: moderateScale(35),
        width: '90%',
        height: verticalScale(40),
        backgroundColor: '#24B775',
        margin: moderateScale(18),
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center'
    },
    signButton: {
        marginTop: moderateScale(10),
        width: '95%',
        height: verticalScale(40),
        backgroundColor: '#FFFFFF',
        margin: moderateScale(10),
        borderRadius: 18,
        justifyContent: 'center',
        textAlign: 'center'
    },
    logintext: {
        alignSelf: 'center',
        color: 'black',
        marginTop: moderateScale(40),
        marginLeft: '25%',
        fontSize: 24,
        fontFamily: "Poppins-SemiBold"
    },
    phoneInput: {
        borderWidth: 1,
        marginTop: moderateScale(80),
        width: '95%',
        height: verticalScale(40),
        justifyContent: 'center',
        alignItems: 'center',
        margin: moderateScale(10),
        borderColor: '#D8D8D8'
    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    simpletext: {
        alignSelf: 'center',
        marginTop: verticalScale(10),
        color: '#000000',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    email: {
        color: '#24B775',
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

    emailtext: {
        fontFamily: "Poppins-Light",
        fontSize: 14,
        width: '90%',
        height: verticalScale(44),
        margin: moderateScale(15),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        marginTop: moderateScale(50),
    },
    passtext: {
        fontFamily: "Poppins-Light",
        fontSize: 14,
        width: '90%',
        margin: moderateScale(15),
        height: verticalScale(44),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        flexDirection: 'row'
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
    emailtext1: {
        marginLeft: moderateScale(8),
    },
    passtext1: {
        marginLeft: moderateScale(8),
    },
    emailtextios: {
        margin: 15
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
        marginHorizontal: 60,
        textAlign: "center",

    },
    counttext: {
        position: 'absolute',
        right: 10,
        alignSelf: 'center',
        color: '#24B775',
        fontFamily: "Poppins-Medium",
        fontSize: 14,
    },
    socialIconContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 30,
    },
});

export default SignUpWithOtp;

