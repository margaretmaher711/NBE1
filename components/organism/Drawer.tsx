import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import Beneficiaries from '../pages/Beneficiaries';

function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="beneficiaries" component={Beneficiaries} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Drawer;
