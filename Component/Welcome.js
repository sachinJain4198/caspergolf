import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


import LeftArrow from '../images/svg/leftArrow.svg'
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hidePass1: true,
            mobNum: '',
            confirmResult: null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}

                />
                <View style={styles.innerview}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={styles.image}><LeftArrow /></View>
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Welcome</Text>
                </View>

                <Text style={styles.verificationText}>Before proceeding we require some {'\n'}important imformation</Text>


                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your First Name"
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
                        placeholder="Enter your Last Name"
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
                <Text style={styles.genderText}>Gender</Text>
                <View style={styles.gender}>
                    <TouchableOpacity style={styles.male}>
                        <Text style={styles.femaletext}> Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.male}>
                        <Text style={styles.femaletext}> Female</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
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
                        placeholder="Confirm Password"
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

                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.signtext}>Submit</Text>
                </TouchableOpacity>
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
        marginTop: '5%',
        color: "#3B3B3B",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        marginBottom: 15,
    },
    loginButton: {
        width: '90%',
        height: 44,
        backgroundColor: '#24B775',
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 18,
        marginTop: 20
    },
    logintext: {
        color: 'black',
        marginTop: verticalScale(30),
        alignSelf: 'center',
        marginLeft: '28%',
        fontSize: 24,
        fontFamily: "Poppins-SemiBold"
    },
    passtext: {
        fontSize: 15,
        width: '90%',
        marginLeft: moderateScale(15),
        marginRight: moderateScale(15),
        height: verticalScale(40),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        marginTop: 40
    },
    lastext: {
        fontSize: 15,
        width: '90%',
        marginLeft: moderateScale(15),
        height: verticalScale(40),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        marginRight: moderateScale(15),
        marginTop: 20
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
    image: {
        marginTop: verticalScale(35),
        width: scale(20),
        height: scale(20),
        marginLeft: verticalScale(20),
    },
    innerview: {
        flexDirection: 'row',
        marginTop: verticalScale(20),
        // justifyContent:'space-around'
    },
    gender: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5,
        marginBottom: 5,
    },
    male: {
        width: '42%',
        borderWidth: 1,
        borderRadius: 5,
        height: 44,
        borderColor: '#D8D8D8'
    },
    femaletext: {
        alignSelf: 'center',
        color: '#707070',
        margin: 10,
        fontFamily: "Poppins-Light",
        fontSize: 14,
    },
    emailtextios: {
        margin: 15,
        color: '#707070',
        fontFamily: "Poppins-Light",
        fontSize: 14,
    },
    passtext1: {
        marginLeft: moderateScale(8),
        color: '#707070',
        fontFamily: "Poppins-Light",
        fontSize: 14,
        flex: 1
    },
    genderText: {
        marginTop: 5,
        marginLeft: 20,
        color: "#707070",
        fontFamily: "Poppins-Medium",
        fontSize: 14,
    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
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

export default Welcome;

