import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const FinishSignupAppBar = ({
  bankNameImage = require('../../assets/bank-login.png'),
  appLogoImage = require('../../assets/logo-login.png'),
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.appBar}>
      <View style={{flexDirection: 'row'}}>
        <Image source={bankNameImage} style={styles.bankLogoImage}></Image>
        <View style={{width: 15}}></View>
        <Image source={appLogoImage} style={styles.logoImage}></Image>
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
