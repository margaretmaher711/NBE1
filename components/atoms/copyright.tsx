import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CopyRightText = () => {
  return (
    <Text style={styles.copyRight}>
      Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
    </Text>
  );
};
const styles = StyleSheet.create({
  copyRight: {
    color: '#ffff',
    fontSize: 10,
  },
});
export default CopyRightText;
