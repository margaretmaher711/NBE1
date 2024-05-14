import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SignUpMessage = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={styles.dontHavAcc}>Don’t have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text style={styles.signupTxt}>Sign up</Text>
      </TouchableOpacity>
      
    </>
  );
};
const styles = StyleSheet.create({
  dontHavAcc: {
    color: '#ffff',
    fontSize: 14,
  },
  signupTxt: {
    color: '#F6A721',
    fontSize: 14,
    fontWeight: '400',
  },
});
export default SignUpMessage;
