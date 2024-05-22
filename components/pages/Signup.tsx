import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignupAppBarOrganism from '../organism/signupappbar';
import WhiteFillFeild from '../atoms/whitefillfield';
import CustomButton from '../atoms/custombutton';
import SignupTitles from '../molecules/SignupTitles';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../theme/ThemeContext';
import SignupTemplet from '../templets/Signup';
function SignUp(): React.JSX.Element {
  const {themeColors} = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    contant: {
      marginHorizontal: 20,
      flex: 1,
      marginVertical: 15,
    },
    screenContainer: {
      backgroundColor: themeColors.themeColor,
      flex: 1,
    },
    bottomNavIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
  });
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <SignupTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default SignUp;
