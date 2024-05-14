import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignupAppBarOrganism from '../organism/signupappbar';
import WhiteFillFeild from '../atoms/whitefillfield';
import CustomButton from '../atoms/custombutton';
import SignupTitles from '../molecules/SignupTitles';
import {useNavigation} from '@react-navigation/native';
function SignUp(): React.JSX.Element {
  const mobIcon = 'phone-portrait-sharp';
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.contant}>
      <View style={styles.upperCont}>
        <SignupAppBarOrganism />
        <SignupTitles
          title="Mobile number"
          subtitle="Enter the mobile number registred in the bank"
        />
        <View style={styles.containerPad}>
          <WhiteFillFeild prefixIcon={mobIcon} placeholder={'Mobile number'} />
        </View>
      </View>
      <View style={styles.lowerCont}>
        <View style={styles.loginContainer}>
          <CustomButton
            title="Next"
            onPressButton={() => navigation.navigate('otp')}
          />
        </View>
        <View style={styles.container}>
          <Text>
            By signing up, you agree to our{' '}
            <Text style={styles.highlight}>Terms of Service</Text> and
            acknowledge that you have read our{' '}
            <Text style={styles.highlight}>Privacy Policy</Text>.
          </Text>
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
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  upperCont: {flex: 6},
  lowerCont: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerPad: {
    marginTop: 15,
    // marginHorizontal: 20,
  },

  container: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  highlight: {
    color: '#1C2437',
    fontWeight: 'bold',
  },
});
export default SignUp;
