import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContactText from '../atoms/contacttxt';

const ContactMolecule = () => {
  return (
    <View style={styles.rowContainer}>
      <ContactText title={'Contact Us'} />
      <ContactText title={' - '} />
      <ContactText title={'FAQs'} />
      <ContactText title={' - '} />
      <ContactText title={'Help'} />
    </View>
  );
};
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ContactMolecule;
