import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import FinishSignup from './pages/FinishSignup';
import Cards from './pages/Cards';
import Otp from './pages/Otp';
import SetPass from './pages/SetPass';
import Transfer from './pages/Transfer';
import Beneficiaries from './pages/Beneficiaries';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="login">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="otp" component={Otp} />
      <Stack.Screen name="setpass" component={SetPass} />
      <Stack.Screen name="finishsignup" component={FinishSignup} />
    </Stack.Navigator>
  );
}

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="cards" component={Cards} />
      <Stack.Screen name="transfer" component={Transfer} />
      <Stack.Screen name="beneficiaries" component={Beneficiaries} />
    </Stack.Navigator>
  );
}
