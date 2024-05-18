import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Transfer from './pages/Transfer';
import Beneficiaries from './pages/Beneficiaries';
import {HomeStack} from './AuthStack';

const Tab = createMaterialBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
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
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.focusedTab}>
                <Image
                  source={require('../assets/whitHome.png')}
                  style={styles.bottomNavIcon}
                />
              </View>
            ) : (
              <Image
                source={require('../assets/Home.png')}
                style={styles.bottomNavIcon}
              />
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
              <View style={styles.focusedTab}>
                <Image
                  source={require('../assets/whitTransfer.png')}
                  style={styles.bottomNavIcon}
                />
              </View>
            ) : (
              <Image
                source={require('../assets/TransferIcon.png')}
                style={styles.bottomNavIcon}
              />
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
              <View style={styles.focusedTab}>
                <Image
                  source={require('../assets/whitBenf.png')}
                  style={styles.bottomNavIcon}
                />
              </View>
            ) : (
              <Image
                source={require('../assets/BeneficiariesIcon.png')}
                style={styles.bottomNavIcon}
              />
            ),
        }}
      />
      <Tab.Screen
        name="ATMs"
        component={HomeStack}
        options={{
          tabBarLabel: 'ATMs',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.focusedTab}>
                <Image
                  source={require('../assets/whiteATMs.png')}
                  style={styles.bottomNavIcon}
                />
              </View>
            ) : (
              <Image
                source={require('../assets/ATMsIcon.png')}
                style={styles.bottomNavIcon}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Air Pay"
        component={HomeStack}
        options={{
          tabBarLabel: 'Air Pay',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.focusedTab}>
                <Image
                  source={require('../assets/whitAirPay.png')}
                  style={styles.bottomNavIcon}
                />
              </View>
            ) : (
              <Image
                source={require('../assets/AirPayIcon.png')}
                style={styles.bottomNavIcon}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomNavIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  focusedTab: {
    backgroundColor: '#007236',
    borderRadius: 16,
    width: 65,
    height: 65,
    alignItems: 'center',
    paddingTop: 7,
  },
});

export default MainTabs;
