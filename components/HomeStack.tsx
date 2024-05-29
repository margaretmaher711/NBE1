import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cards from './pages/Cards';
import Transfer from './pages/Transfer';
import Beneficiaries from './pages/Beneficiaries';
import Home from './pages/Home';
import OtpTransfer from './pages/OtpTransfer';
import AddBeneficiaries from './pages/AddBeneficiaries/AddBeneficiaries';
import BeneficiariesHistory from './pages/BeneficiariesHistory';
import ATMs from './pages/ATMs/ATMs';
import AirPay from './pages/AirPay/AirPay';

const Stack = createNativeStackNavigator();
export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="cards" component={Cards} />
      <Stack.Screen name="transfer" component={Transfer} />
      <Stack.Screen name="beneficiaries" component={Beneficiaries} />
      <Stack.Screen name="addBeneficiaries" component={AddBeneficiaries} />
      <Stack.Screen
        name="beneficiariesHistory"
        component={BeneficiariesHistory}
      />
      <Stack.Screen name="airPay" component={AirPay} />
      <Stack.Screen name="atms" component={ATMs} />
      <Stack.Screen name="otpTransfer" component={OtpTransfer} />
    </Stack.Navigator>
  );
}
