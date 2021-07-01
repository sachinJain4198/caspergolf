// import React from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import Home from '../Component/Home';
// import About from '../Component/About';
// import LogOut from '../Component/LogOut';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import SlideMenu from '../Component/SlideMenu';

// const MyDrawer = createAppContainer(createDrawerNavigator({
//     Home:{
//         screen:Home,
//         navigationOptions:{
//             drawerLabel:'Home',
//             drawerIcon: ({ tintColor }) => (
//                 <Icon
//                   name="home"
//                   size={24}
//                   style={{ color: tintColor }}
//                 />
//               ),            
//         }
//     },
//     About:{
//         screen:About,
//         navigationOptions:{
//             drawerLabel:'About',
//             drawerIcon: ({ tintColor }) => (
//                 <Icon
//                   name="info"
//                   size={24}
//                   style={{ color: tintColor }}
//                 />
//               ),            
//         }
//     },
//     LogOut:{
//       screen:LogOut,
//       navigationOptions:{
//           drawerLabel:'LogOut',
//           drawerIcon: ({ tintColor }) => (
//               <Icon
//                 name="logout"
//                 size={24}
//                 style={{ color: tintColor }}
//               />
//             ),            
//       }
//   },
// },{contentComponent:SlideMenu}));

// export default MyDrawer;