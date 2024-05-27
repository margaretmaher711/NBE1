import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useThemeCustome} from '../shared/theme/ThemeContext';
import {useNavigation} from '@react-navigation/native';
import OTPTemplet from '../templets/Otp';
function OtpTransfer(): React.JSX.Element {
  const {themeColors} = useThemeCustome(); // Access the theme colors
  const navigation = useNavigation();
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
        <OTPTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default OtpTransfer;
