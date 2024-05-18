import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTabs from './MainTabs';
import {AuthStack} from './AuthStack';

function App() {
  const isLoggedIn = true;
  return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
