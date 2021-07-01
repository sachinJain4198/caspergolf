import React from 'react';

import { View, StyleSheet, Text, TextInput, Button, Touchable, TouchableOpacity, Image } from 'react-native';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center'
  },
  textContainer: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    alignSelf: 'center',
    marginLeft: 100
  },
  textinput1: {
    marginTop: '40%',
    fontSize: 18,
    fontWeight: '400',
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#0000001A'
  },
  textinput2: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '400',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#0000001A'
  },
  textinput3: {
    fontSize: 18,
    fontWeight: '400',
    borderRadius: 20,
    width: '45%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#0000001A'
  },
  textinput4: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '400',
    borderWidth: 1,
    borderRadius: 20,
    width: '95%',
    alignSelf: 'center',
    borderColor: '#0000001A'
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#EA0028',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    color: 'white'
  },
  otpContainer: {
    marginTop: 25,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    color: 'white'
  },
  facebookContainer: {
    marginTop: 25,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#3A559F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    color: 'white',
    flexDirection: 'row'
  },
  facebookImage: {
    width: 20,
    height: 20
  },
  googleContainer: {
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#FF1111',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    color: 'white',
    flexDirection: 'row'
  },
  googleImage: {
    width: 20,
    height: 20
  },
  appleContainer: {
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#2B2B2B',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    color: 'white',
    flexDirection: 'row'
  },
  appleImage: {
    width: 40,
    height: 40
  },
  textStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15
  },
  signupContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    width: '25%',
    height: 30,
    alignSelf: 'center',
    borderColor: 'black'
  },
  headerContainer: {
    height: 50,
    backgroundColor: '#EA0028',
    flexDirection: 'row',

  },
  insideContainer: {
    position: 'absolute',
    top: '20%',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    height: '80%',
    borderRadius: 20,
    bottom: 60
  },
  text: {
    textAlign: 'center',
    fontWeight: '200'
  },
  row: {
    height: 40,
    backgroundColor: '#F7F8FA'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    // position:'absolute',
    // bottom:10
  },
  inputContainer: {
    width: '70%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
    paddingHorizontal: 10,

  },
  header: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 10,
    color: '#e93766',
    fontWeight: 'bold'
  },
  orContainer: {
    marginTop: 2,
    alignSelf: 'center',
    fontSize: 20
  },
  forgetPassword: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 15
  },

  hardCodedText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  simpletextContainer: {
    alignSelf: 'center', marginTop: 40, fontSize: 20, color: '#e93766'
  },
  imageContainer: {
    width: '90%',
    alignSelf: 'center',

  },
  listTitle: {
    fontSize: 22
  },
  listDescription: {
    fontSize: 16
  }
});

export default Styles;