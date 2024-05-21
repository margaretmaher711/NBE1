import 'react-native-gesture-handler';
import React  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {HoomeDrawer} from './organism/HomeDrawer';

function App() {
  const isLoggedIn = true;
 return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? <HoomeDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
