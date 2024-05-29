import {Dimensions, StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    balanceBg: {
      width: Dimensions.get('screen').width - 40,
      height: 132,
      borderRadius: 10,
      resizeMode: 'cover',
      marginVertical: 35,
    },
    fingerPrintImg: {width: 30, height: 30},
    balnceFingerRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 14,
    },
    balanceText: {
      color: themeColors.commonWhite,
      fontSize: 16,
      fontWeight: '400',
    },
    balanceValText: {
      color: themeColors.commonWhite,
      fontSize: 25,
      fontWeight: '700',
      textAlign: 'center',
    },
  });
export default getStyles;
