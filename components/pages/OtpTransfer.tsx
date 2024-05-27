import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import OTPTransfer from '../templets/OtpTransfer';
import {useTheme} from '../shared/theme/ThemeContext';
function OtpTransfer(): React.JSX.Element {
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
        <OTPTransfer />
      </View>
    </SafeAreaView>
  );
}

export default OtpTransfer;
