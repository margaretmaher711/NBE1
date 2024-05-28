
import { StyleSheet } from 'react-native';

const getStyles = (themeColors) => StyleSheet.create({
    contant: {
      flex: 1,
      marginHorizontal: 20,
      marginVertical: 15,
      backgroundColor: themeColors.milkBG,
    },
    bottomNavIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
  })

export default getStyles;
