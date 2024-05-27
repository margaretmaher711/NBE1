import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Beneficiaries from '../pages/Beneficiaries';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomDrawerContent} from '../molecules/CustomDrawerContent';
import MainTabs from '../MainTabs';
import {useThemeCustome} from '../shared/theme/ThemeContext';

const Drawer = createDrawerNavigator();

export function HoomeDrawer() {
  const {themeColors} = useThemeCustome(); // Access the theme colors
  const styles = StyleSheet.create({
    iconContainer: {
      width: 33,
      height: 33,
      backgroundColor: themeColors.grayBG,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      margin: 0,
      padding: 0,
      
    },

    drawerLabelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    drawerItemStyle: {
      borderRadius: 12,
    },
    drawerStyle: {
      borderBottomRightRadius: 40,
      borderTopRightRadius: 40,
    },
    container: {
      flex: 1,
    },
  });
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: [
          styles.drawerStyle,
          {backgroundColor: themeColors.themeColor},
        ],
        drawerLabelStyle: [styles.drawerLabelStyle],
        drawerActiveTintColor: themeColors.activeColor,
        drawerInactiveTintColor: themeColors.textColor,
        drawerActiveBackgroundColor: themeColors.boxActiveColor,
        drawerItemStyle: styles.drawerItemStyle,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      >
      <Drawer.Screen
        name="Home"
        component={MainTabs}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
      <Drawer.Screen
        name="Account Summary"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Account Summary',

          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon name="file-tray-stacked" size={18} color={'#000'} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Open Certificates & Deposits"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Open Certificates & Deposits',
          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon name="document" size={18} color={'#000'} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Payement Services"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Payement Services',
          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon name="card" size={18} color={'#000'} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Cards Services"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Cards Services',
          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon name="card-outline" size={18} color={'#000'} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Hard Token"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Hard Token',
          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon name="key" size={18} color={'#000'} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Offers"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Offers',
          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon name="pricetag" size={18} color={'#000'} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Customer Services"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Customer Services',
          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon name="people" size={18} color={'#000'} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Calculators"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Calculators',
          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon name="calculator" size={18} color={'#000'} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
