import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CongrateMsgText = () => {
  return (
    <>
      <Text style={styles.congrateText}>Congratulations</Text>
      <Text style={styles.succmsg}>
        You have successfully registered in NBE online banking service
      </Text>
    </>
  );
};
const styles = StyleSheet.create({
  contactTxt: {
    color: '#F6A721',
    fontSize: 12,
    fontWeight: '700',
  },

  congrateText: {
    fontSize: 30,
    color: '#F7F7F7',
    fontWeight: '700',
  },
  succmsg: {
    fontSize: 16,
    color: '#F7F7F7',
    fontWeight: '400',
  },
});
export default CongrateMsgText;
