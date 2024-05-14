import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignUpMessageOrganism from '../organism/signupmessageorg';
import LoginButtonOrganism from '../organism/loginbuttonorg';
import CheckBoxOrganism from '../organism/checkboxorg';
import WhiteFillFeild from '../atoms/whitefillfield';
import DarkFillFeild from '../atoms/darktransparentfeild';
import LoginAppBarOrganism from '../organism/loginappbarorg';
import WelcomText from '../atoms/welcomtxt';
function LoginTemplet(): React.JSX.Element {
  const lockIcon = 'lock-closed-outline';

  return (
    <SafeAreaView style={styles.container}>
      <LoginAppBarOrganism />
      <WelcomText />
      <DarkFillFeild prefixIcon="@" placeholder={'User Name'} />
      <WhiteFillFeild prefixIcon={lockIcon} placeholder={'Password'} />
      <CheckBoxOrganism />
      <LoginButtonOrganism />
      <SignUpMessageOrganism />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop:15,
    flex: 1,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});
export default LoginTemplet;
