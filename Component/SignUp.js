import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from '../Component/Scale';
import SocialButton from './socialButton';
import LeftArrow from '../images/svg/leftArrow.svg'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.image}><LeftArrow />
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Create Account</Text>
                </View>
                <Text style={styles.verificationText}>A verification code will be sent {'\n'} to your Email Id</Text>
                <View style={styles.emailtext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.emailtext1}
                        placeholder="Email ID"
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
                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('SignUpWithOtp')}>
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
        marginTop: '10%',
        color: "#3B3B3B",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        marginBottom: verticalScale(45),
    },
    loginButton: {
        marginTop: moderateScale(25),
        width: '90%',
        height: verticalScale(40),
        backgroundColor: '#24B775',
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: "center"
    },
    logintext: {
        marginTop: verticalScale(30),
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
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
        fontFamily: "Poppins-Light",
        fontSize: 14
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateScale(15)
    },
    emailtext: {
        fontFamily: "Poppins-Light",
        fontSize: 14,
        width: '90%',
        height: verticalScale(44),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        marginBottom: 20
    },
    passtext: {
        fontFamily: "Poppins-Light",
        fontSize: 14,
        width: '90%',
        height: verticalScale(44),
        borderWidth: 1,
        alignSelf: 'center',
        alignContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: '#D8D8D8',
        flexDirection: 'row'
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
        marginTop: moderateScale(20)
    },
    emailtext1: {
        marginLeft: moderateScale(8),
    },
    passtext1: {
        marginLeft: moderateScale(8),
    },
    orlines: {
        flexDirection: 'row',
        marginTop: moderateScale(30)
    },
    lines: {
        backgroundColor: '#EDEDED',
        height: verticalScale(1),
        flex: 1,
        alignSelf: 'center',
        marginLeft: moderateScale(18)
    },
    lines1: {
        backgroundColor: '#EDEDED',
        height: verticalScale(1),
        flex: 1,
        alignSelf: 'center',
        marginRight: moderateScale(18)
    },
    emailtextios: {
        margin: moderateScale(15)
    },
    termsPolicyText: {
        flex: 1,
        color: "#000000",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        textAlign: "center",
        marginTop: 10,
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
        marginTop: 25,
    },


});

export default SignUp;

