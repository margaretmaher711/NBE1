import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from '@rneui/themed';

const CheckBoxOrganism = () => {
  return (
    <View style={styles.checkboxContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.checkbox}>
          <CheckBox checked={false} />
        </View>
        <Text style={styles.rememberText}>Remember me</Text>
      </View>
      <Text style={styles.rememberText}>Forgot password?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  checkboxContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
    // marginHorizontal: 5,
    marginLeft: 0,
  },
  checkbox: {
    // margin: 0,
    // padding: 0,
    alignSelf: 'center',
    marginRight: 10,
    //askkk
    marginLeft: -8,
    borderRadius: 6.25,
    width: 30,
    height: 30,
  },
  rememberText: {
    color: '#ffff',
    fontSize: 14,
  },
});
export default CheckBoxOrganism;
