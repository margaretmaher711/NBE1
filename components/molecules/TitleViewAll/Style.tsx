
import { StyleSheet } from 'react-native';

const getStyles = (themeColors) => StyleSheet.create({
    homeTitles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    //   marginBottom: 12,
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

export default getStyles;
