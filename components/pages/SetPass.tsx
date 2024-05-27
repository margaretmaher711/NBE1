import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useThemeCustome} from '../shared/theme/ThemeContext';
import SetPassTemplet from '../templets/SetPass';

function SetPass(): React.JSX.Element {
  const navigation = useNavigation();

  const {themeColors} = useThemeCustome();

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
  });
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <SetPassTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default SetPass;
