import React from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';

import {useThemeCustome} from '../shared/theme/ThemeContext';
import CustomButton from '../atoms/custombutton';
import SignupTitles from '../molecules/SignupTitles';
import SignupAppBarOrganism from '../organism/signupappbar';
import CustomTextInput from '../atoms/CustomTextInput';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/SignupTempletStyles';
import HighlightText from '../atoms/Text/HighlightText/HighLightText';

function SignupTemplet({navigation}): React.JSX.Element {
  const {themeColors} = useThemeCustome(); // Access the theme colors
  const mobIcon = 'phone-portrait-sharp';
  const styles = useThemeStyles(getStyles);
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.upperCont}>
        <SignupAppBarOrganism />
        <SignupTitles
          title="Mobile number"
          subtitle="Enter the mobile number registred in the bank"
        />

        <CustomTextInput
          lable={'Mobile number'}
          prefixIcon={mobIcon}
          validateInput={() => {}}
        />
      </View>
      <View style={styles.lowerCont}>
        <View style={styles.loginContainer}>
          <CustomButton
            title="Next"
            onPressButton={() => navigation.navigate('otp')}
          />
        </View>
        <View style={styles.container}>
          <Text
            style={{
              color: themeColors.darkBlue,
            }}>
            By signing up, you agree to our{' '}
            <HighlightText title={'Terms of Service'} /> and acknowledge that
            you have read our <HighlightText title={'Privacy Policy'} />.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignupTemplet;
