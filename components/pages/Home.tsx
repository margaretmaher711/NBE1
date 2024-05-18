import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import HomeTemplet from '../templets/Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function Home(): React.JSX.Element {
  return (
   
    <SafeAreaView style={styles.contant}>
      {/* <Text>gdfsdf</Text> */}
      <HomeTemplet />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contant: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#F1F3FB',
  },
  bottomNavIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
export default Home;
