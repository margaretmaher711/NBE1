import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CustomButton from '../atoms/custombutton';
import FinishSignupAppBar from '../molecules/FinishSignup';
import CongrateMsgText from '../atoms/CongrateMsg';
import {useAuth} from '../shared/auth/AuthContext ';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/FinishSignupTempletStyles';
import {useThemeCustome} from '../shared/theme/ThemeContext';
function FinishSignupTemplet(): React.JSX.Element {
  const {login} = useAuth();
  const styles = useThemeStyles(getStyles);
  const {themeColors} = useThemeCustome();
  const handleLogin = () => {
    login();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperCont}>
        <FinishSignupAppBar />
        <CongrateMsgText />
      </View>
      <View style={styles.lowerCont}>
        <CustomButton
          title={'Finish'}
          onPressButton={handleLogin}
          buttonColor={themeColors.commonWhite}
          textColor={themeColors.boxActiveColor}
        />
      </View>
    </SafeAreaView>
  );
}
export default FinishSignupTemplet;
