import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    cardTitles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 13,
    },
    title: {
      color: themeColors.darkBlue,
      fontWeight: '700',
      fontSize: 20,
    },
  });

export default getStyles;
