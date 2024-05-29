import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    appBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
    },
    logoImage: {
      width: 34,
      height: 38,
    },
    bankLogoImage: {
      width: 122,
      height: 37,
    },
    langContainer: {
      width: 42,
      height: 40,
      backgroundColor: themeColors.boxActiveColor,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    langText: {
      fontSize: 16,
      fontWeight: '700',
      color: themeColors.boxActiveColor,
    },
  });

export default getStyles;
