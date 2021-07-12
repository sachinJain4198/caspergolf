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
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email ID"
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

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                        placeholderTextColor="707070"
                    // onChangeText={password =>
                    //     setFormValues(prevState => ({
                    //         ...prevState,
                    //         password: password.trim(),
                    //         incorrectPassword: false,
                    //     }))
                    // }


                    />
                </View>
                <View style={styles.forgotButtonContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotButton}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: '13%',
        color: "#3B3B3B",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        marginBottom: "12%"
    },
    loginButton: {
        marginTop: moderateScale(30),
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
        marginLeft: '32%',
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
        marginTop: 3,
        marginBottom: moderateScale(15),
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
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        width: "90%",
        height: 44,
        marginVertical: 10,
        marginHorizontal: "5%",
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
    forgotButton: {
        fontFamily: "Poppins-Medium",
        fontSize: 14,
    },
    forgotButtonContainer: {
        width: '90%',
        justifyContent: "flex-end",
        flexDirection: "row",
        marginHorizontal: "5%",
    },
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

