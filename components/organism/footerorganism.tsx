import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CopyRightText from '../atoms/copyright';
import ContactMolecule from '../molecules/contactmolecule';

const FooterOrganism = () => {
  return (
    <View style={styles.rowContainer}>
      <ContactMolecule />
      <CopyRightText />
    </View>
  );
};
const styles = StyleSheet.create({
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#00000fc0',
    height: 66,
  },
});
export default FooterOrganism;
