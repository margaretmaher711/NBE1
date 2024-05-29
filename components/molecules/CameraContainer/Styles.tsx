import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    camiraContainer: {
      height: 138,
      width: 138,
      backgroundColor: themeColors.commonWhite,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      borderRadius: 30,
    },
    iconStyle: {
      color: themeColors.boxActiveColor,
    },
  });

export default getStyles;
