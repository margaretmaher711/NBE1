import 'react-native-gesture-handler';
import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Otp from './pages/Otp';
import SetPass from './pages/SetPass';
import FinishSignup from './pages/FinishSignup';
import Home from './pages/Home';
import BottomTapsScreen from './pages/BottomTaps';
import Cards from './pages/CardS';
import Transfer from './pages/Transfer';
import Beneficiaries from './pages/Beneficiaries';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="otp" component={Otp} />
        <Stack.Screen name="setpass" component={SetPass} />
        <Stack.Screen name="finishsignup" component={FinishSignup} />
        <Stack.Screen name="bottomtaps" component={BottomTapsScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="cards" component={Cards} />
        <Stack.Screen name="transfer" component={Transfer} />
        <Stack.Screen name="beneficiaries" component={Beneficiaries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
