import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBoxCustom from '../../atoms/CheckBox/CheckBoxCustom';

const CheckBoxOrganism = () => {
  return (
    <View style={styles.checkboxContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBoxCustom />
        <Text style={styles.rememberText}>Remember me</Text>
      </View>
      <Text style={styles.rememberText}>Forgot password?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 0,
  },

  rememberText: {
    color: '#ffff',
    fontSize: 14,
  },
});
export default CheckBoxOrganism;
