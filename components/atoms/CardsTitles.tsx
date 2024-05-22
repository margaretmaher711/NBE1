import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../theme/ThemeContext';

const CardTitle: React.FC<{title: string}> = ({title}) => {
  const {themeColors} = useTheme();
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
