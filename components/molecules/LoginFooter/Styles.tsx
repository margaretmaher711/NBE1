import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    rowContainer: {
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: themeColors.commonOpacityBG,
      height: 66,
    },
  });

export default getStyles;
