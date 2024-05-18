import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../atoms/custombutton';
import {useNavigation} from '@react-navigation/native';
const fingerPrint = '../../assets/finger-print.png';

const LoginButtonOrganism = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginContainer}>
      <CustomButton
        title="Log in"
        onPressButton={() => navigation.navigate('home')}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text >homeeeeeeeeeeeeeeeeee</Text>
      </TouchableOpacity> */}
      <View style={{width: 25}} />
      <Image source={require(fingerPrint)}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default LoginButtonOrganism;
