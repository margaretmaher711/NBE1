import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomContainer: React.FC<{title: string; onPressed:any}> = ({
  title,
  onPressed=() => navigation.goBack(),
}) => {
  return (
    <View style={styles.langContainer}>
      {/* <Text style={styles.langText}>AR</Text> */}
      {/* <IoIosArrowBack /> */}
      <TouchableOpacity onPress={onPressed}>
        <Text style={styles.langText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  langContainer: {
    width: 42,
    height: 40,
    elevation: 4,
    backgroundColor: '#fff',
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
export default CustomContainer;
