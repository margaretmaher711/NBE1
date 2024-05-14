import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomText = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.welcomText}>
        Welcome to The National Bankof Egypt
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  welcomText: {
    color: '#ffff',
    fontSize: 40,
    lineHeight: 46.5,
    fontWeight: '700',
    textAlign: 'left',
  },

  content: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    // marginLeft: 17,
  },
});
export default WelcomText;
