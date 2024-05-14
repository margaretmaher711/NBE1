import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CreditCardData: React.FC<{title: string; data: string}> = ({
  title,
  data,
}) => {
  return (
    <View>
      <Text style={styles.titleTxt}>{title}</Text>
      <Text style={styles.dataTxt}>{data}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  dataTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'GemunuLibre-Bold',
  },
  titleTxt: {
    color: '#848484',
    fontSize: 14,
    fontWeight: '700',
    // fontFamily: 'GemunuLibre-Bold',
  },
});
export default CreditCardData;
