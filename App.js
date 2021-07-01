// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, { Component } from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// import Tabs from 'react-native-tabs';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { page: 'first' };
//   }
//   render() {
//     var self = this;
//     return (
//       <View style={styles.container}>
//         <View style={{position:'absolute',top:80,right:20,width:50}}>
//         <Image source={require('./images/contract.png')} style={{width:40,height:40}} resizeMode='contain'></Image>
//         </View>
//         <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row' }}>
//           <Text style={{ margin: 10, fontSize: 25, fontWeight: 'bold' }}>CASPER GOLF</Text>
//           <View style={{ position: 'absolute', right: 80, margin: 10 }}>
//             <Image source={require('./images/bell.png')} style={{ width: 30, height: 30 }} resizeMode='contain' />
//           </View>
//           <View style={{ backgroundColor: '#24B775', position: 'absolute', right: 10, margin: 15, width: 60, height: 25, borderRadius: 15 }}>
//             <Text style={{ textAlign: 'center', margin: 3 }}>Play</Text>
//           </View>
//         </View>
//         <Tabs selected={this.state.page} style={{ backgroundColor: 'white',borderRadius:20}}
//           selectedStyle={{ color: 'red' }} onSelect={el => this.setState({ page: el.props.name })}>
//           <View style={{flexDirection:'column'}}>
//           <Image source={require('./images/newspaper.png')} style={{ width: 25, height: 25 }} resizeMode='contain' />
//           <Text name="first" selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>Feeds</Text>
//           </View>
//           <View style={{flexDirection:'column'}}>
//           <Image source={require('./images/golf-flag-and-field.png')} style={{ width: 25, height: 25 }} resizeMode='contain' />
//           <Text name="second">Courses</Text>
//           </View>
//           <View style={{flexDirection:'column'}}>
//           <Image source={require('./images/video.png')} style={{ width: 25, height: 25 }} resizeMode='contain' />
//           <Text name="third">Videos</Text>
//           </View>
//           <View style={{flexDirection:'column'}}>
//           <Image source={require('./images/stats.png')} style={{ width: 25, height: 25 }} resizeMode='contain' />
//           <Text name="fourth" selectedStyle={{ color: 'green' }}>Stats</Text>
//           </View>
//           <View style={{flexDirection:'column'}}>
//           <Image source={require('./images/user.png')} style={{ width: 25, height: 25 }} resizeMode='contain' />
//           <Text name="fifth">Profile</Text>
//           </View>
          
         
//         </Tabs>
//         <Card>
//           <View style={{ flexDirection: 'row' }}>
//             <Image source={require('./images/home.jpeg')} style={{ width: 40, height: 40, borderRadius: 50 }} />
//             <View style={{ flexDirection: 'column', marginLeft: 10 }}>
//               <Text>Martin Kaymer</Text>
//               <Text>4h ago</Text>
//             </View>
//           </View>

//           <Card.Divider />
//           <Card.Image source={require('./images/home.jpeg')}>
//           </Card.Image>
//           <Text>
//             The idea with React Native Elements is more about component structure than actual design.
//     </Text>
//         </Card>
//         <View style={{ flexDirection: 'row',marginTop:10}}>
//         <Image source={require('./images/heart.png')} style={{width:20,height:20,marginLeft:20}}></Image>
//           <Text style={{marginLeft:10}}>Unlike</Text>
//           <Image source={require('./images/comment.png')} style={{width:20,height:20,marginLeft:10}} resizeMode='contain'></Image>
//           <Text style={{marginLeft:10}}>Comment</Text>
//         </View>
//         <Card>
//           <View style={{ flexDirection: 'row',marginTop:10}}>
//             <Image source={require('./images/home.jpeg')} style={{ width: 40, height: 40, borderRadius: 50 }} />
//             <View style={{ flexDirection: 'column', marginLeft: 10 }}>
//               <Text>Reagan Roth at Arrowhead.</Text>
//               <Text>1 day ago</Text>
//             </View>
//           </View>

//           <Card.Divider />
//           <Card.Image source={require('./images/home.jpeg')}>
//           </Card.Image>
//           <Text>
//             The idea with React Native Elements is more about component structure than actual design.
//     </Text>
//         </Card>
//         <View style={{ flexDirection: 'row',marginTop:10}}>
//         <Image source={require('./images/heart.png')} style={{width:20,height:20,marginLeft:20}}></Image>
//           <Text style={{marginLeft:10}}>Unlike</Text>
//           <Image source={require('./images/comment.png')} style={{width:20,height:20,marginLeft:10}} resizeMode='contain'></Image>
//           <Text style={{marginLeft:10}}>Comment</Text>
//         </View>
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './Navigator/StackNavigator';

export default function App() {
  return (
      <StackNavigator />
  );
}
