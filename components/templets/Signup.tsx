import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useTheme} from '../theme/ThemeContext';
import CustomButton from '../atoms/custombutton';
import CustomOtpInput from '../atoms/CustomOtpInput';
import SignupTitles from '../molecules/SignupTitles';
import SignupAppBarOrganism from '../organism/signupappbar';
import WhiteFillFeild from '../atoms/whitefillfield';
import CustomTextInput from '../atoms/CustomTextInput';

function SignupTemplet({navigation}): React.JSX.Element {
  const {themeColors} = useTheme(); // Access the theme colors
  const mobIcon = 'phone-portrait-sharp';
  const styles = StyleSheet.create({
    keyboardAvoidingView: {
      flex: 1,
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
    upperCont: {flex: 2},
    lowerCont: {
      flex: 0.5,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    containerPad: {
      marginTop: 15,
    },

    modalText: {
      marginBottom: 16,
      textAlign: 'center',
      fontWeight: '400',
      color: '#B7B7B7',
      lineHeight: 23.44,
      // height:23.44
    },
    modalTitleText: {
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: '700',
      lineHeight: 23.44,
      color: themeColors.darkBlue,
    },

    container: {
      // marginHorizontal: 20,
      marginTop: 20,
    },
    highlight: {
      color: themeColors.darkBlue,
      fontWeight: 'bold',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    buttonConainer: {
      flex: 0.13,
      flexDirection: 'row',
    },
    modalView: {
      margin: 35,
      backgroundColor: themeColors.nativThemeContainerBG,
      borderRadius: 20,
      padding: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
    },
  });
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
        <View style={styles.containerPad}>
          <WhiteFillFeild prefixIcon={mobIcon} placeholder={'Mobile number'} />
        </View>
        {/* <CustomTextInput lable={'Mobile number'} /> */}
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
            <Text style={styles.highlight}>Terms of Service</Text> and
            acknowledge that you have read our{' '}
            <Text style={styles.highlight}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignupTemplet;
