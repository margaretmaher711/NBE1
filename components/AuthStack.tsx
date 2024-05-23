import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import FinishSignup from './pages/FinishSignup';
import Otp from './pages/Otp';
import SetPass from './pages/SetPass';

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


