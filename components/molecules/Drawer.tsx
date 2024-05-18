import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, StyleSheet, View, Text, Switch, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import CustomContainer from '../atoms/CustomContainer';
import CustomSwitch from '../atoms/Switch';
import FinishSignupAppBar from './FinishSignup';
import Home from '../pages/Home';



const Drawer = createDrawerNavigator();

export function CustomDrawerContent(props) {
  const bankNameImage = require('../../assets/bank-ahly.png');
  const appLogoImage = require('../../assets/app-icon.png');
  const userProf = require('../../assets/userprof.png');
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.appBar}>
        <FinishSignupAppBar
          bankNameImage={bankNameImage}
          appLogoImage={appLogoImage}
        />
        <CustomContainer title={'AR'} />
      </View>
      <DrawerItemList {...props} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Icon name="moon" size={23} color="#000" style={{paddingLeft: 24}} />
          <Text style={[styles.drawerLabelStyle, {color: '#000'}]}>
            Dark Mode
          </Text>
        </View>
        <CustomSwitch />
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 18,
          alignItems: 'center',
        }}>
        <Icon name="power" size={20} color="#000" style={{paddingLeft: 24}} />
        <Text style={[styles.drawerLabelStyle, {color: '#EB001B'}]}>
          Log Out
        </Text>
      </View>
      <View style={styles.sendMoneyCardList}>
        <Image source={userProf} style={styles.logoListImage}></Image>
        <View>
          <Text style={styles.nameText}>Ahmad Sami</Text>

          <Text style={styles.greyText}>+20 101 131 5412</Text>
        </View>
        <Icon
          name="ellipsis-vertical"
          size={20}
          style={{paddingLeft: 24}}
        />
      </View>
    </DrawerContentScrollView>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           drawerStyle: styles.drawerStyle,
//           drawerLabelStyle: styles.drawerLabelStyle,
//           drawerActiveTintColor: '#fff', // Active text color
//           drawerInactiveTintColor: '#000', // Inactive text color
//           drawerActiveBackgroundColor: '#007236', // Active background color
//           drawerItemStyle: styles.drawerItemStyle,
//         }}
//         drawerContent={props => <CustomDrawerContent {...props} />}>
//         <Drawer.Screen
//           name="Account Summary"
//           component={Home}
//           options={{
//             drawerLabel: 'Account Summary',
//             drawerIcon: ({focused, size}) => (
//               <Icon
//                 name="file-tray-stacked"
//                 size={size}
//                 color={focused ? '#fff' : '#000'}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Open Certificates & Deposits"
//           component={Home}
//           options={{
//             drawerLabel: 'Open Certificates & Deposits',
//             drawerIcon: ({focused, size}) => (
//               <Icon
//                 name="document"
//                 size={size}
//                 color={focused ? '#fff' : '#000'}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Payement Services"
//           component={Home}
//           options={{
//             drawerLabel: 'Payement Services',
//             drawerIcon: ({focused, size}) => (
//               <Icon name="card" size={size} color={focused ? '#fff' : '#000'} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Cards Services"
//           component={Home}
//           options={{
//             drawerLabel: 'Cards Services',
//             drawerIcon: ({focused, size}) => (
//               <Icon
//                 name="card-outline"
//                 size={size}
//                 color={focused ? '#fff' : '#000'}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Hard Token"
//           component={Home}
//           options={{
//             drawerLabel: 'Hard Token',
//             drawerIcon: ({focused, size}) => (
//               <Icon name="key" size={size} color={focused ? '#fff' : '#000'} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Offers"
//           component={Home}
//           options={{
//             drawerLabel: 'Offers',
//             drawerIcon: ({focused, size}) => (
//               <Icon
//                 name="pricetag"
//                 size={size}
//                 color={focused ? '#fff' : '#000'}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Customer Services"
//           component={Home}
//           options={{
//             drawerLabel: 'Customer Services',
//             drawerIcon: ({focused, size}) => (
//               <Icon
//                 name="people"
//                 size={size}
//                 color={focused ? '#fff' : '#000'}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Calculators"
//           component={Home}
//           options={{
//             drawerLabel: 'Calculators',
//             drawerIcon: ({focused, size}) => (
//               <Icon
//                 name="calculator"
//                 size={size}
//                 color={focused ? '#fff' : '#000'}
//               />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    padding: 16,
  },
  sendMoneyCardList: {
    elevation: 5,
    shadowRadius: 18,
    flexDirection: 'row',
    height: 86,
    // width: 78,
    backgroundColor: '#fff',
    borderRadius: 29,
    padding: 15,
    margin: 16,
    // justifyContent:'center',
    alignItems: 'center',
  },
  logoListImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.41,
    color: '#1C2437',
  },
  rowContainerData: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  greyText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B7B7B7',
    lineHeight: 16.41,
  },
  switch: {
    marginTop: 20,
  },
  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerItemStyle: {
    marginVertical: 5,
  },
  drawerStyle: {
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
  },
  container: {
    flex: 1,
  },
  appBarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
