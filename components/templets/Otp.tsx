import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';

import CustomButton from '../atoms/custombutton';
import CustomOtpInput from '../atoms/CustomOtpInput';
import SignupAppBarOrganism from '../organism/signupappbar';
import { useThemeStyles } from '../shared/theme/ThemeStyles';
import getStyles from '../styles/OtpTempletStyles';
import TitleSubTitle from '../molecules/TitleSubTitle/TitleSubTitle';

function OTPTemplet({navigation}): React.JSX.Element {
  const [otp, setOtp] = useState('');
  const styles = useThemeStyles(getStyles);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.upperCont}>
        <SignupAppBarOrganism />

        <TitleSubTitle
          title="Verification"
          subtitle="Enter 5 digit code we sent to +20 101 131 5412"
        />
        <CustomOtpInput setOtp={setOtp} />
        <Text style={styles.subTitle}>Didn’t receive the code?</Text>
        <Text style={styles.title}>Request new one in 00:12</Text>
      </View>
      <View style={styles.lowerCont}>
        <View style={styles.loginContainer}>
          {otp.length == 6 ? (
            <CustomButton
              title="Submit"
              onPressButton={() => navigation.navigate('setpass')}
            />
          ) : (
            <CustomButton
              title="Submit"
              onPressButton={() => null}
              opacity={0.7}
            />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default OTPTemplet;
