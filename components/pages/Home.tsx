import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import HomeTemplet from '../templets/Home';
import {useTheme} from '../shared/theme/ThemeContext';

function Home({navigation}): React.JSX.Element {
  const {themeColors} = useTheme(); // Access the theme colors
  const styles = StyleSheet.create({
    contant: {
      marginHorizontal: 20,
      flex: 1,
      marginVertical: 15,
    },
    screenContainer: {
      backgroundColor: themeColors.themeColor,
      flex: 1,
    },
    bottomNavIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
  });
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <HomeTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default Home;
