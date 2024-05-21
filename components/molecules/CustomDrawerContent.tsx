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
import Beneficiaries from '../pages/Beneficiaries';

const Drawer = createDrawerNavigator();

export function CustomDrawerContent(props) {
  const bankNameImage = require('../../assets/bank-ahly.png');
  const appLogoImage = require('../../assets/app-icon.png');
  const userProf = require('../../assets/userprof.png');
  return (
    <DrawerContentScrollView
      {...props}
      style={styles.drawerContent}
      contentContainerStyle={styles.contentContainer}>
      <View>
        <View style={styles.appBar}>
          <FinishSignupAppBar
            bankNameImage={bankNameImage}
            appLogoImage={appLogoImage}
          />
          <CustomContainer title={'AR'} />
        </View>

        <DrawerItemList {...props} />
        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <View style={styles.iconContainer}>
              <Icon name="moon" size={18} color="#000" />
            </View>
            <Text style={[styles.drawerLabelStyle, {color: '#000'}]}>
              Dark Mode
            </Text>
          </View>
          <CustomSwitch />
        </View>
      </View>
      <View style={{gap: 15}}>
        <View style={styles.logoutContainer}>
          <View
            style={[
              styles.iconContainer,
              {backgroundColor: 'rgba(225, 7, 33, 0.2)'},
            ]}>
            <Icon name="power" size={20} color="#EB001B" />
          </View>
          <Text style={[styles.drawerLabelStyle, {color: '#EB001B'}]}>
            Log Out
          </Text>
        </View>
        <View style={styles.sendMoneyCardList}>
          <Image source={userProf} style={styles.logoListImage} />
          <View>
            <Text style={styles.nameText}>Ahmad Sami</Text>
            <Text style={styles.greyText}>+20 101 131 5412</Text>
          </View>
          <Icon name="ellipsis-vertical" size={20} style={{paddingLeft: 24}} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 16,
  },
  appBar: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  sendMoneyCardList: {
    elevation: 4,
    shadowRadius: 18,
    flexDirection: 'row',
    height: 86,
    backgroundColor: '#fff',
    borderRadius: 29,
    padding: 15,
    marginHorizontal: 16,
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
  greyText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B7B7B7',
    lineHeight: 16.41,
  },
  iconContainer: {
    marginLeft: 20,
    width: 33,
    height: 33,
    backgroundColor: 'rgba(27, 27, 27, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchRow: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoutContainer: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
  },
  drawerItemStyle: {
    marginVertical: 5,
  },
  drawerStyle: {
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default CustomDrawerContent;
