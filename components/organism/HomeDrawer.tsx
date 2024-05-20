import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Beneficiaries from '../pages/Beneficiaries';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomDrawerContent} from '../molecules/CustomDrawerContent';
import MainTabs from '../MainTabs';

const Drawer = createDrawerNavigator();

export function HoomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawerStyle,
        drawerLabelStyle: styles.drawerLabelStyle,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        drawerActiveBackgroundColor: '#007236',
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
          drawerIcon: ({focused, size}) => (
            <Icon
              name="file-tray-stacked"
              size={size}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Open Certificates & Deposits"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Open Certificates & Deposits',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="document"
              size={size}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payement Services"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Payement Services',
          drawerIcon: ({focused, size}) => (
            <Icon name="card" size={size} color={focused ? '#fff' : '#000'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cards Services"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Cards Services',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="card-outline"
              size={size}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Hard Token"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Hard Token',
          drawerIcon: ({focused, size}) => (
            <Icon name="key" size={size} color={focused ? '#fff' : '#000'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Offers"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Offers',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="pricetag"
              size={size}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Customer Services"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Customer Services',
          drawerIcon: ({focused, size}) => (
            <Icon name="people" size={size} color={focused ? '#fff' : '#000'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Calculators"
        component={Beneficiaries}
        options={{
          drawerLabel: 'Calculators',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="calculator"
              size={size}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    padding: 16,
  },
  sendMoneyCardList: {
    elevation: 4,
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
