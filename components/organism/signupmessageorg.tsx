import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SignUpMessage from '../atoms/signupmessage';

const SignUpMessageOrganism = () => {

  return (
    <View style={styles.rowContainer}>
      <SignUpMessage  />
    </View>
  );
};
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
export default SignUpMessageOrganism;
