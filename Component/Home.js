import React from 'react';

import { View, Text, ScrollView, Image, Linking, Platform, TextInput } from 'react-native';
// import { GoogleSignin, statusCodes } from 'react-native-google-signin';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { TextInput } from 'react-native-paper';
import Styles from './Style';
// import { AccessToken, LoginManager } from "react-native-fbsdk";

class Home extends React.Component {
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
      <ScrollView>
        <View style={Styles.Container}>
          <Text>Login</Text>
        </View>
      </ScrollView>
    )
  }
}


// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     reduxIncreaseCounter: () => dispatch({
//       type: 'INCREASE_COUNTER',
//       value: 1,
//     }),
//     reduxDecreaseCounter: () => dispatch({
//       type: 'DECREASE_COUNTER',
//       value: 1,
//     }),
//   };
// };

export default Home;

