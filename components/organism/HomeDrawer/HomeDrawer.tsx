import * as React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Beneficiaries from '../../pages/Beneficiaries/Beneficiaries';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomDrawerContent} from '../../molecules/CustomDrawerContent';
import MainTabs from '../MainTabs';
import {useThemeCustome} from '../../shared/theme/ThemeContext';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

const Drawer = createDrawerNavigator();

export function HoomeDrawer() {
  const {themeColors} = useThemeCustome(); // Access the theme colors
  const styles = useThemeStyles(getStyles);

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
      drawerContent={props => <CustomDrawerContent {...props} />}>
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
          drawerIcon: function ({focused, size}) {
            console.log('foc', focused);

            return (
              <View style={styles.iconContainer}>
                <Icon
                  name="file-tray-stacked"
                  size={18}
                  color={
                    focused ? themeColors.themeColor : themeColors.commonBlack
                  }
                />
              </View>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Open Certificates & Deposits"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Open Certificates & Deposits',
          drawerIcon: ({focused, size}) => (
            <View style={styles.iconContainer}>
              <Icon
                name="document"
                size={18}
                color={
                  focused ? themeColors.themeColor : themeColors.commonBlack
                }
              />
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
              <Icon
                name="card"
                size={18}
                color={
                  focused ? themeColors.themeColor : themeColors.commonBlack
                }
              />
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
              <Icon
                name="card-outline"
                size={18}
                color={
                  focused ? themeColors.themeColor : themeColors.commonBlack
                }
              />
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
              <Icon
                name="key"
                size={18}
                color={
                  focused ? themeColors.themeColor : themeColors.commonBlack
                }
              />
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
              <Icon
                name="pricetag"
                size={18}
                color={
                  focused ? themeColors.themeColor : themeColors.commonBlack
                }
              />
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
              <Icon
                name="people"
                size={18}
                color={
                  focused ? themeColors.themeColor : themeColors.commonBlack
                }
              />
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
              <Icon
                name="calculator"
                size={18}
                color={
                  focused ? themeColors.themeColor : themeColors.commonBlack
                }
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
