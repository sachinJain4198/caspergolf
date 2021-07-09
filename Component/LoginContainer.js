import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            phoneInput: null
        }
    }

    onPressFlag() {
        this.myCountryPicker.open()
    }

    selectCountry(country) {
        this.phone.selectCountry(country.iso2)
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
                    <Text style={styles.logintext}>Login</Text>
                </View>

                <Text style={styles.text}>A verification code will be sent {'\n'} to your phone via SMS</Text>
                <PhoneInput
                    ref={this.state.phoneInput}
                    defaultValue={this.state.value}
                    defaultCode="IN"
                    layout="first"
                    onChangeText={(text) => {
                        this.setState({ value: text });
                    }}
                    onChangeFormattedText={(text) => {
                        this.setState({ value: text })
                    }}
                    placeholder="Mobile No"
                    containerStyle={styles.containerStyle}
                    textContainerStyle={styles.textContainerStyle}
                    codeTextStyle={styles.codeTextStyle}
                    textInputStyle={styles.textInputStyle}
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('LoginWithEmail')}>
                    <Text style={styles.signtext}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.simpletext}>Login with <Text style={styles.email}>Email</Text> </Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#FFFFFF',
        backgroundColor: '#FFFFFF'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: '20%',
    },
    loginButton: {
        width: '90%',
        height: moderateScale(40),
        backgroundColor: '#24B775',
        margin: verticalScale(18),
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 40
    },
    logintext: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: verticalScale(30),
        marginLeft: '32%'
    },
    phoneInput: {
        borderWidth: 1,
        marginTop: verticalScale(80),
        width: '90%',
        height: moderateScale(45),
        justifyContent: 'center',
        alignItems: 'center',
        margin: verticalScale(18),
        borderColor: '#D8D8D8',

    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 15
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
        marginTop: verticalScale(20)
    },
    containerStyle: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        marginTop: 70,
        borderColor: '#D8D8D8',
        borderWidth: 1,
        borderRadius: 5
    },
    textContainerStyle: {
        backgroundColor: '#FFFFFF',
        borderLeftWidth: 1,
        borderColor: '#D8D8D8',
    },
    codeTextStyle: {
        height: 40,
        alignSelf: 'center',
        marginTop: 20
    },
    textInputStyle: {
        height: 80,
        marginTop: 2
    }
});

export default LoginContainer;

