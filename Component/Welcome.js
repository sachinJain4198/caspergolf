import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from '../Component/Scale';

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
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.image}><LeftArrow />
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Welcome</Text>
                </View>
                <Text style={styles.verificationText}>Before proceeding we require some {'\n'}important imformation</Text>

                <View style={styles.passtext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.passtext1}
                        placeholder="Enter your First Name"
                        value={this.state.password}
                        onChangeText={this.handlePass}
                    />
                </View>

                <View style={styles.lastext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.passtext1}
                        placeholder="Enter your Last Name"
                        value={this.state.password}
                        onChangeText={this.handlePass}
                    />
                </View>
                <Text style={styles.genderText}>Gender</Text>
                <View style={styles.gender}>
                    <TouchableOpacity style={styles.male}>
                        <Text style={styles.femaletext}>??? Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.male}>
                        <Text style={styles.femaletext}>??? Female</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.lastext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.passtext1}
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={this.handlePass}
                    />
                </View>

                <View style={styles.lastext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.passtext1}
                        placeholder="Confirm Password"
                        value={this.state.password}
                        onChangeText={this.handlePass}
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
        marginTop: 10,
        color: "#3B3B3B",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        marginBottom: 15,
    },
    loginButton: {
        width: '90%',
        height: verticalScale(44),
        backgroundColor: '#24B775',
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: "center",
        marginTop: verticalScale(30)
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
    passtext: {
        fontSize: 15,
        width: '90%',
        height: verticalScale(44),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        marginTop: 10,
    },
    lastext: {
        fontSize: 15,
        width: '90%',
        height: verticalScale(44),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
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
        color: '#24B775'
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
        marginTop: moderateScale(10),
    },
    male: {
        width: '42%',
        borderWidth: 1,
        borderRadius: 5,
        height: verticalScale(44),
        borderColor: '#D8D8D8'
    },
    femaletext: {
        alignSelf: 'center',
        color: '#707070',
        margin: moderateScale(10),
        fontFamily: "Poppins-Light",
        fontSize: 14,
    },
    emailtextios: {
        margin: moderateScale(15),
        color: '#707070',
        fontFamily: "Poppins-Light",
        fontSize: 14,
    },
    passtext1: {
        marginLeft: moderateScale(8), color: '#707070',
        fontFamily: "Poppins-Light",
        fontSize: 14,
        flex: 1
    },
    genderText: {
        marginTop: moderateScale(15),
        width: "90%",
        alignSelf: "center",
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
});

export default Welcome;

