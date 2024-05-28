import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import OTPTemplet from '../templets/Otp';
import { useThemeStyles } from '../shared/theme/ThemeStyles';
import getStyles from '../styles/OtpStyles';
function OtpTransfer(): React.JSX.Element {
  const navigation = useNavigation();
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <OTPTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default OtpTransfer;
