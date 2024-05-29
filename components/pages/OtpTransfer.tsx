import React from 'react';
import {SafeAreaView, View} from 'react-native';
import OTPTransfer from '../templets/OtpTransfer';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/PageStyles';
function OtpTransfer(): React.JSX.Element {
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <OTPTransfer />
      </View>
    </SafeAreaView>
  );
}

export default OtpTransfer;
