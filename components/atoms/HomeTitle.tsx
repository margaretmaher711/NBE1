import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeTitle: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.homeTitles}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  homeTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#1C2437',
    fontWeight: '700',
    fontSize: 20,
  },
  viewAll: {
    color: '#808080',
    fontWeight: '400',
    fontSize: 14,
  },
});
export default HomeTitle;
