import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../atoms/custombutton';
import FinishSignupAppBar from '../molecules/FinishSignup';
import CongrateMsgText from '../atoms/CongrateMsg';
import { useAuth } from '../shared/auth/AuthContext ';
function FinishSignupTemplet(): React.JSX.Element {
  const lockIcon = 'lock-closed-outline';
  const { login } = useAuth();

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
          buttonColor={'white'}
          textColor="#007236"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 15,
    flex: 1,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  upperCont: {flex: 5},

  lowerCont: {
    flexDirection: 'row',
    flex: 0.5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default FinishSignupTemplet;
