import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


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
                        <Image source={require('../images/left-arrow.png')} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Welcome</Text>
                </View>

                <Text style={styles.text}>Before proceeding we require some {'\n'}important imformation</Text>

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
                        <Text style={styles.femaletext}> Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.male}>
                        <Text style={styles.femaletext}> Female</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.lastext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.passtext1}
                        placeholder="PassWord"
                        value={this.state.password}
                        onChangeText={this.handlePass}
                    />
                </View>

                <View style={styles.lastext}>
                    <TextInput
                        style={Platform.OS == "ios" ? styles.emailtextios : styles.passtext1}
                        placeholder="Confirm PassWord"
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
    text: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: '6%',
    },
    loginButton: {
        width: '90%',
        height: verticalScale(40),
        backgroundColor: '#24B775',
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 18,
        marginTop: 30
    },
    logintext: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        marginTop: verticalScale(30),
        alignSelf: 'center',
        marginLeft: '28%'
    },
    passtext: {
        fontSize: 15,
        width: '90%',
        marginLeft: moderateScale(15),
        marginRight: moderateScale(15),
        height: verticalScale(44),
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
        height: verticalScale(44),
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
        fontWeight: "bold"
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
        marginTop: 15,
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
        margin: 10
    },
    emailtextios: {
        margin: 15
    },
    passtext1: {
        marginLeft: moderateScale(8),
    },
    genderText: {
        marginTop: 15, marginLeft: 20
    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 15
    },
});

export default Welcome;

