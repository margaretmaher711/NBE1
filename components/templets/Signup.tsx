import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import SignupAppBarOrganism from '../organism/signupappbar';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/keyboardAvoidingViewStyles';
import TitleSubTitle from '../molecules/TitleSubTitle/TitleSubTitle';
import Footer from '../organism/Signup/Footer/Footer';
import SignupForm from '../organism/Signup/Form/SignupForm';

function SignupTemplet({navigation}): React.JSX.Element {
  const styles = useThemeStyles(getStyles);
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SignupAppBarOrganism />
      <TitleSubTitle
        title="Mobile number"
        subtitle="Enter the mobile number registred in the bank"
      />
      <SignupForm />
      <Footer navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

export default SignupTemplet;
