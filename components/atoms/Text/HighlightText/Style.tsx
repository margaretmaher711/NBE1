import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    highlight: {
      color: themeColors.darkBlue,
      fontWeight: 'bold',
    },
  });

export default getStyles;
