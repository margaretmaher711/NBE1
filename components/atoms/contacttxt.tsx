import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ContactText: React.FC<{title: string}> = ({title}) => {
  return <Text style={styles.contactTxt}>{title}</Text>;
};
const styles = StyleSheet.create({
  contactTxt: {
    color: '#F6A721',
    fontSize: 12,
    fontWeight: '700',
  },
});
export default ContactText;
