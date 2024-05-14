import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardTitle: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.cardTitles}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cardTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: '#1C2437',
    fontWeight: '700',
    fontSize: 20,
  },
});
export default CardTitle;
