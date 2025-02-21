import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {OtpInput} from 'react-native-otp-entry/dist/OtpInput/OtpInput';
import {useThemeCustome} from '../shared/theme/ThemeContext';
const CustomOtpInput = ({setOtp}) => {
  const {themeColors} = useThemeCustome();

  const styles = StyleSheet.create({
    activePinCodeContainer: {
      borderColor: '#007236',
      borderWidth: 1.5,
    },
    pinCodeText: {
      color: themeColors.darkBlue,
    },
    pinCodeContainer: {
      marginVertical: 20,
      borderColor: themeColors.nativThemeContainerBG,
      backgroundColor: themeColors.nativThemeContainerBG,
      elevation: 2,
      borderRadius: 10,
    },
  });
  return (
    <OtpInput
      numberOfDigits={6}
      //   focusColor="green"
      focusStickBlinkingDuration={500}
      onTextChange={text =>{
        setOtp(text);
      }}
      onFilled={text => console.log(`OTP is ${text}`)}
      textInputProps={{
        accessibilityLabel: 'One-Time Password',
      }}
      theme={{
        // containerStyle: styles.pinContainer,
        pinCodeContainerStyle: styles.pinCodeContainer,
        pinCodeTextStyle: styles.pinCodeText,
        // focusStickStyle: styles.focusStick,
        focusedPinCodeContainerStyle: styles.activePinCodeContainer,
      }}
    />
  );
};

export default CustomOtpInput;
