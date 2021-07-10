import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


import { connect } from 'react-redux';
import { changeEmail } from '../store/actions/basicActions';
import SocialButton from './socialButton';
import LeftArrow from '../images/svg/leftArrow.svg'

class LoginWithEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

        let { actions } = this.props;


    }

    handleEmail = (text) => {
        this.setState({ email: text })
        this.props.setChangeEmail(text);
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
                    <Text style={styles.logintext}>Login</Text>
                </View>
                <Text style={styles.verificationText}>A verification code will be {'\n'} sent to your Email Id </Text>
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
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={this.handlePass}
                    />
                </View>

                <Text style={Platform.OS == "ios" ? styles.forgetPassios : styles.forgetPass}>Forgot Password ?</Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Round')}>
                    <Text style={styles.signtext}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.simpletext}>Login with <Text style={styles.email}>Mobile</Text> </Text>
                <View style={styles.orlines}>
                    <View style={styles.lines} />
                    <Text style={styles.ortext}>OR</Text>
                    <View style={styles.lines1} />
                </View>

                <View style={styles.socialIconContainer}>
                    <SocialButton type="google" />
                    <SocialButton type="facebook" />
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
        marginTop: moderateScale(40),
        width: '90%',
        height: verticalScale(40),
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
        marginLeft: '35%',
        fontSize: 24,
        fontFamily: "Poppins-SemiBold"
    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    simpletext: {
        alignSelf: 'center',
        marginTop: moderateScale(10),
        color: '#000000',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    email: {
        color: '#24B775',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    forgetPass: {
        position: 'absolute',
        right: moderateScale(20),
        marginTop: moderateScale(380),
        fontFamily: "Poppins-Medium",
        fontSize: 14,
    },
    forgetPassios: {
        position: 'absolute',
        right: moderateScale(20),
        marginTop: moderateScale(370),
        fontFamily: "Poppins-Medium",
        fontSize: 14,
    },
    ortext: {
        alignSelf: 'center',
        paddingHorizontal: 8, color: "#999999",
        fontFamily: "Poppins-Light",
        fontSize: 14
    },
    socialIconContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    emailtext: {
        fontSize: 15,
        width: '90%',
        height: verticalScale(44),
        margin: moderateScale(15),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        marginTop: moderateScale(50)
    },
    passtext: {
        fontSize: 15,
        width: '90%',
        margin: moderateScale(15),
        height: verticalScale(44),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
    },
    image: {
        marginTop: verticalScale(45),
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
    emailtextios: {
        margin: 15
    }
});


const mapStateToProps = (state) => {
    return {
        email: state.basic.email
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setChangeEmail: (value) => dispatch(changeEmail(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithEmail)

