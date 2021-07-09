import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

class LoginWithEmail extends React.Component {
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
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../images/left-arrow.png')} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Login
                    </Text>
                </View>
                <Text style={styles.text}>A verification code will be {'\n'} sent to your Email Id</Text>
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
                <View style={styles.social}>
                    <TouchableOpacity style={styles.google}>
                        <Text style={styles.googleText}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.facebook}>
                        <Text style={styles.facebookText}>Facebook</Text>
                    </TouchableOpacity>
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
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: '15%',
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
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: moderateScale(40),
        marginLeft: '35%'
    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 15
    },
    simpletext: {
        alignSelf: 'center',
        marginTop: moderateScale(10),
        fontWeight: "bold"
    },
    email: {
        color: '#24B775'
    },
    forgetPass: {
        position: 'absolute',
        right: moderateScale(20),
        marginTop: moderateScale(380),
        fontWeight: "bold"
    },
    forgetPassios: {
        position: 'absolute',
        right: moderateScale(20),
        marginTop: moderateScale(370),
        fontWeight: "bold"
    },
    ortext: {
        alignSelf: 'center',
        color: '#999999',
        paddingHorizontal: 8, fontSize: 18
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateScale(10)
    },
    google: {
        borderWidth: 1,
        width: '30%',
        margin: moderateScale(10),
        textAlign: 'center',
        height: verticalScale(30),
        borderRadius: 5,
        borderColor: '#CCCCCC',
    },
    facebook: {
        borderWidth: 1,
        width: '30%',
        margin: moderateScale(10),
        textAlign: 'center',
        height: verticalScale(30),
        borderRadius: 5,
        backgroundColor: '#3B5999',
        borderColor: '#CCCCCC'
    },
    googleText: {
        alignSelf: 'center',
        margin: moderateScale(4),
        color: '#666666'
    },
    facebookText: {
        alignSelf: 'center',
        margin: moderateScale(4),
        color: '#FFFFFF'
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

export default LoginWithEmail;

