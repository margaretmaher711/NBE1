import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// import {IoIosArrowBack} from 'react-icons/io';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const appLogoImage = '../../assets/logo-login.png';
const bankNameImage = '../../assets/bank-login.png';

const FinishSignupAppBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appBar}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require(bankNameImage)}
          style={styles.bankLogoImage}></Image>
        <View style={{width: 15}}></View>
        <Image source={require(appLogoImage)} style={styles.logoImage}></Image>
      </View>
      <View style={{height: 80}} />
    </View>
  );
};
const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    // padding: 16,
  },
  logoImage: {
    width: 34,
    height: 38,
  },
  bankLogoImage: {
    width: 122,
    height: 37,
  },
  langContainer: {
    width: 42,
    height: 40,
    backgroundColor: '#007236',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  langText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007236',
  },
});
export default FinishSignupAppBar;
