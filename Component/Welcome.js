import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, TextInput } from 'react-native';
// import { GoogleSignin, statusCodes } from 'react-native-google-signin';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { TextInput } from 'react-native-paper';
import Styles from './Style';
// import PhoneInput from 'react-native-phone-input';
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

    componentDidMount() {

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerview}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../images/left-arrow.png')} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Welcome</Text>
                </View>

                <Text style={styles.text}>Before proceeding we require some {'\n'}important imformation</Text>

                <TextInput
                    style={styles.passtext}
                    placeholder="Enter your First Name"
                    value={this.state.password}
                    onChangeText={this.handlePass}
                />

                <TextInput
                    style={styles.lastext}
                    placeholder="Enter your Last Name"
                    value={this.state.password}
                    onChangeText={this.handlePass}
                />

                <View style={styles.gender}>
                <TouchableOpacity style={styles.male}>
                <Text style={styles.femaletext}> Male</Text>
                </TouchableOpacity>
                   
                <TouchableOpacity style={styles.male}>
                <Text style={styles.femaletext}> Female</Text>
                </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.passtext}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={this.handlePass}
                />

                <TextInput
                    style={styles.passtext}
                    placeholder="Confirm Password"
                    value={this.state.password}
                    onChangeText={this.handlePass}
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
        color: '#FFFFFF'
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: '10%',
    },
    loginButton: {
        width: '90%',
        height: moderateScale(40),
        backgroundColor: '#24B775',
        margin: verticalScale(18),
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center'
    },
    logintext: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: verticalScale(30),
        marginLeft: '32%'
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
        marginTop: 30
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
    gender:{
        flexDirection:'row',justifyContent:'space-evenly',marginTop:10,
    },
    male:{
        width:'42%',borderWidth:1,borderRadius:5,height:44,borderColor:'#D8D8D8'
    },
    femaletext:{
        alignSelf:'center',color:'#707070',margin:10
    }
});

export default Welcome;

