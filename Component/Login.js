import React from 'react';

import { View, Text, Image, StyleSheet, Linking, Platform, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { GoogleSignin, statusCodes } from 'react-native-google-signin';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { TextInput } from 'react-native-paper';
import Styles from './Style';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

class Login extends React.Component {
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

  componentWillUnmount() { // C
    // Linking.removeEventListener('url', this.handleOpenURL);
  }

  render() {
    return (
      <View style={styles.container}>
       
        <Image source={require('../images/login.jpeg')} style={styles.image}/>
       
        <Text style={styles.text}>Everything you need to {'\n'} play better golf</Text>
        <TouchableOpacity style={styles.loginButton} onPress={()=>this.props.navigation.navigate('LoginContainer')}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signButton} onPress={()=>this.props.navigation.navigate('SignUp')}>
          <Text style={styles.signtext}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      color:'#FFFFFF'
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: '10%',
      fontWeight:"500",
      color:'#000000'
    },
    loginButton: {
      marginTop: moderateScale(30),
      width:'90%',
      height:verticalScale(40),
      backgroundColor:'#24B775',
      margin:moderateScale(18),
      borderRadius:5,
      justifyContent:'center',
      textAlign:'center'
    },
    signButton: {
      marginTop:moderateScale(10),
      width:'90%',
      height:verticalScale(40),
      backgroundColor:'#FFFFFF',
      margin:moderateScale(18),
      borderRadius:5,
      justifyContent:'center',
      textAlign:'center',
      borderColor:'#D8D8D8',
      borderWidth:1
    },
    logintext:{
      alignSelf:'center',
      color:'white',
      fontSize:15
    },
    signtext:{
      alignSelf:'center',
      color:'#707070',
      fontSize:15
    },
    image:{
      width:'60%',alignSelf:'center',marginTop:moderateScale(50)
    }
  });

export default Login;
