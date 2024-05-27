import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useThemeCustome} from '../shared/theme/ThemeContext';

const CardTitle: React.FC<{title: string}> = ({title}) => {
  const {themeColors} = useThemeCustome();
  const styles = StyleSheet.create({
    cardTitles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
    },
    title: {
      color: themeColors.darkBlue,
      fontWeight: '700',
      fontSize: 20,
    },
  });
  return (
    <View style={styles.cardTitles}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CardTitle;
