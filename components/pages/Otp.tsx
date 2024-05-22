import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignupAppBarOrganism from '../organism/signupappbar';
import CustomButton from '../atoms/custombutton';
import SignupTitles from '../molecules/SignupTitles';
import {useNavigation} from '@react-navigation/native';
import CustomOtpInput from '../atoms/CustomOtpInput';
function Otp(): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.contant}>
      <View style={styles.upperCont}>
        <SignupAppBarOrganism />
        <SignupTitles
          title="Verification"
          subtitle="Enter 5 digit code we sent to +20 101 131 5412"
        />
        <CustomOtpInput />
        <Text style={styles.subTitle}>Didn’t receive the code?</Text>
        <Text style={styles.title}>Request new one in 00:12</Text>
      </View>
      <View style={styles.lowerCont}>
        <View style={styles.loginContainer}>
          <CustomButton
            title="Submit"
            onPressButton={() => navigation.navigate('setpass')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contant: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#F1F3FB',
  },
  title: {
   color: themeColors.darkBlue,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  subTitle: {
    color: '#B7B7B7',
    fontSize: 16,
    marginTop: 5,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  upperCont: {flex: 6},
  lowerCont: {
    flex: 0.5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerPad: {
    marginTop: 15,
  },
});
export default Otp;
