
import { StyleSheet } from 'react-native';

const getStyles = (themeColors) => StyleSheet.create({
    contant: {
      marginHorizontal: 20,
      flex: 1,
      marginVertical: 15,
    },
    screenContainer: {
      backgroundColor: themeColors.themeColor,
      flex: 1,
    },
  });

export default getStyles;
