import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const appLogoImage = '../../assets/logo-login.png';
const bankNameImage = '../../assets/bank-login.png';
const LoginAppBarOrganism = () => {
  return (
    <View style={styles.appBar}>
      <View style={styles.langContainer}>
        <Text style={styles.langText}>AR</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require(bankNameImage)}
          style={styles.bankLogoImage}></Image>
        <View style={{width: 15}}></View>
        <Image source={require(appLogoImage)} style={styles.logoImage}></Image>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: '#FFFFFF',
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
export default LoginAppBarOrganism;
