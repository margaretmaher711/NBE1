import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
// import {StyleSheet} from 'react-native';

import {Image, StyleSheet, Text, View} from 'react-native';
import SignUp from '../pages/Signup';
import Home from '../pages/Home';
import Transfer from '../pages/Transfer';
import Beneficiaries from '../pages/Beneficiaries';
const Tab = createMaterialBottomTabNavigator();

function BottomTaps() {
  return (
    <Tab.Navigator
      // labeled={false}
      activeColor="#ffff"
      
     barStyle={{
        backgroundColor: 'white',
        position: 'absolute',
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 85,
        
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel:'Home',
          tabBarLabelStyle: styles.tabBarLabel, 
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <View style={styles.foucsedTap}>
                <Image
                  source={require('../../assets/whitHome.png')}
                  style={styles.bottomNavIcon}></Image>
              </View>
            ) : (
              <View>
                <Image
                  source={require('../../assets/Home.png')}
                  style={styles.bottomNavIcon}></Image>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarLabel: 'Transfer',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.foucsedTap}>
                <Image
                  source={require('../../assets/whitTransfer.png')}
                  style={styles.bottomNavIcon}></Image>
              </View>
            ) : (
              <Image
                source={require('../../assets/TransferIcon.png')}
                style={styles.bottomNavIcon}></Image>
            ),
        }}
      />
      <Tab.Screen
        name="Beneficiaries"
        component={Beneficiaries}
        options={{
          tabBarLabel: 'Beneficiaries',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.foucsedTap}>
                <Image
                  source={require('../../assets/whitBenf.png')}
                  style={styles.bottomNavIcon}></Image>
              </View>
            ) : (
              <Image
                source={require('../../assets/BeneficiariesIcon.png')}
                style={styles.bottomNavIcon}></Image>
            ),
        }}
      />
      <Tab.Screen
        name="Profile2"
        component={SignUp}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.foucsedTap}>
                <Image
                  source={require('../../assets/whiteATMs.png')}
                  style={styles.bottomNavIcon}></Image>
              </View>
            ) : (
              <Image
                source={require('../../assets/ATMsIcon.png')}
                style={styles.bottomNavIcon}></Image>
            ),
        }}
      />
      <Tab.Screen
        name="Profile3"
        component={SignUp}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.foucsedTap}>
                <Image
                  source={require('../../assets/whitAirPay.png')}
                  style={styles.bottomNavIcon}></Image>
              </View>
            ) : (
              <Image
                source={require('../../assets/AirPayIcon.png')}
                style={styles.bottomNavIcon}></Image>
            ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  contant: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#F1F3FB',
  },
  bottomNavIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  foucsedTap: {
    backgroundColor: '#007236',
    borderRadius: 16,
    width: 65,
    height: 65,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 7,
    // marginBottom: 10,
  },
  // focusedLabel: {
  //   color: '#ffff',
  //   fontSize: 50,
  // },
  tabBarLabel: {
    color: 'red',
    fontSize: 50, // Set your desired font size here
  },
});
export default BottomTaps;
