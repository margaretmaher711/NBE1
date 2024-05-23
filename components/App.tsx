import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {HoomeDrawer} from './organism/HomeDrawer';
import {ThemeProvider} from './theme/ThemeContext';

function App() {
  const isLoggedIn = true;
  return (
    <ThemeProvider>
      <NavigationContainer independent={true}>
        {isLoggedIn ? <HoomeDrawer /> : <AuthStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
