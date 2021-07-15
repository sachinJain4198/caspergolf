import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from '../Component/Scale';
import Logo from '../images/svg/logo.svg'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.image}>
          <Logo />
        </View>
        <Text style={styles.everythingText}>Everything you need to {'\n'} play better golf</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('LoginContainer')}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signButton} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.signtext}>Sign Up</Text>
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
  everythingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: '5%',
    color: '#000000',
    fontFamily: "Poppins-Medium",
  },

  loginButton: {
    marginTop: moderateScale(20),
    width: '90%',
    height: scale(40),
    backgroundColor: '#24B775',
    margin: moderateScale(18),
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center'
  },
  signButton: {
    marginTop: moderateScale(8),
    width: '90%',
    height: scale(40),
    backgroundColor: '#FFFFFF',
    margin: moderateScale(18),
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: '#D8D8D8',
    borderWidth: 1
  },
  logintext: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
  signtext: {
    alignSelf: 'center',
    color: '#707070',
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
  image: {
    width: '100%',
    justifyContent:"center",
    alignItems:"center",
    marginTop: moderateScale(65)
  }
});

export default Login;

