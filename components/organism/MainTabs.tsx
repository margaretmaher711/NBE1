import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Transfer from '../pages/Transfer';
import Beneficiaries from '../pages/Beneficiaries';
import ATMs from '../pages/ATMs/ATMs';
import {useThemeCustome} from '../shared/theme/ThemeContext';
import {HomeStack} from '../HomeStack';
import {useTheme} from 'react-native-paper';
import BottomTap from '../molecules/BottomTap';
import AirPay from '../pages/AirPay/AirPay';

const Tab = createMaterialBottomTabNavigator();

function MainTabs() {
  const theme = useTheme();
  const {themeColors} = useThemeCustome(); // Access the theme colors
  theme.colors.secondaryContainer = 'transparent'; //default gray background
  return (
    <Tab.Navigator
      activeColor={themeColors.commonWhite}
      inactiveColor={themeColors.textColor}
      
      barStyle={{
        backgroundColor:themeColors.nativThemeContainerBG,
        position: 'absolute',
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 85,
        borderWidth: 0,
        borderTopWidth: 0,
        elevation: 5,
      }}>
      <Tab.Screen
        name="homescreen"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <BottomTap
              focused={focused}
              focusedImg={require('../../assets/whitHome.png')}
              unFocusedImg={require('../../assets/Home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarLabel: 'Transfer',
          tabBarIcon: ({focused}) => (
            <BottomTap
              focused={focused}
              unFocusedImg={require('../../assets/TransferIcon.png')}
              focusedImg={require('../../assets/whitTransfer.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Beneficiaries"
        component={Beneficiaries}
        options={{
          tabBarLabel: 'Beneficiaries',
          tabBarIcon: ({focused}) => (
            <BottomTap
              focused={focused}
              unFocusedImg={require('../../assets/BeneficiariesIcon.png')}
              focusedImg={require('../../assets/whitBenf.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ATMs"
        component={ATMs}
        options={{
          tabBarLabel: 'ATMs',
          tabBarIcon: ({focused}) => (
            <BottomTap
              focused={focused}
              unFocusedImg={require('../../assets/ATMsIcon.png')}
              focusedImg={require('../../assets/whiteATMs.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Air Pay"
        component={AirPay}
        options={{
          tabBarLabel: 'Air Pay',
          tabBarIcon: ({focused}) => (
            <BottomTap
              focused={focused}
              unFocusedImg={require('../../assets/AirPayIcon.png')}
              focusedImg={require('../../assets/whitAirPay.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
