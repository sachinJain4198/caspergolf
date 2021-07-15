import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput, StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { changeEmail } from '../store/actions/basicActions';
import SocialButton from './socialButton';
import LeftArrow from '../images/svg/leftArrow.svg';
import { scale, verticalScale, moderateScale } from '../Component/Scale';

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
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.image}><LeftArrow />
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Login</Text>
                </View>
                <Text style={styles.verificationText}>A verification code will be {'\n'} sent to your Email Id</Text>
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
    },

    loginButton: {
        marginTop: verticalScale(25),
        width: '90%',
        height: 44,
        backgroundColor: '#24B775',
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
    },
    logintext: {
        marginTop: verticalScale(30),
        color: 'black',
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
        fontFamily: "Poppins-SemiBold",
    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: "Poppins-Medium",

    },
    simpletext: {
        alignSelf: 'center',
        marginBottom: verticalScale(15),
        color: '#000000',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        marginTop: verticalScale(20),

    },
    email: {
        color: '#24B775',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    forgetPass: {
        position: 'absolute',
        right: moderateScale(20),
        marginTop: verticalScale(380),
        fontWeight: "bold"
    },
    forgetPassios: {
        position: 'absolute',
        right: moderateScale(20),
        marginTop: verticalScale(370),
        fontWeight: "bold"
    },
    ortext: {
        alignSelf: 'center',
        color: '#999999',
        paddingHorizontal: 8,
        fontFamily: "Poppins-Light",
        fontSize: 14
    },
    socialIconContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: verticalScale(25),
    },
    emailtext: {
        width: '90%',
        height: verticalScale(44),
        marginBottom: 10,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        fontFamily: "Poppins-Light",
        fontSize: 14,
        marginTop: verticalScale(50)
    },
    passtext: {
        width: '90%',
        height: verticalScale(44),
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        fontFamily: "Poppins-Light",
        fontSize: 14,
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
        marginLeft: 8,
        backgroundColor: '#FFFFFF',
        color: 'red'
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

