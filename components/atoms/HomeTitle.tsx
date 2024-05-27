import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../shared/theme/ThemeContext';

const HomeTitle: React.FC<{title: string}> = ({title}) => {
  const {themeColors} = useTheme(); // Access the theme colors
  const styles = StyleSheet.create({
    homeTitles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    title: {
      color: themeColors.darkBlue,
      fontWeight: '700',
      fontSize: 20,
    },
    viewAll: {
      color: themeColors.subTitleColor,
      fontWeight: '400',
      fontSize: 14,
    },
  });
  return (
    <View style={styles.homeTitles}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
  );
};

export default HomeTitle;
