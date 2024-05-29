import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    contant: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
    },
    userProf: {
      width: 45,
      height: 45,
      borderRadius: 10,
    },
    menuStyle: {
      color: themeColors.textColor,
    },
    menuContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 45,
      flex: 0.6,
    },
    bellContainer: {
      backgroundColor: themeColors.nativThemeContainerBG,
      borderRadius: 10,
      padding: 10,
      width: 45,
      height: 45,
      elevation: 4,
    },
    goodMorningMsg: {
      color: themeColors.textColor,
      fontWeight: '400',
      fontSize: 14,
    },
    userNameMsg: {
      color: themeColors.textColor,
      fontWeight: '700',
      fontSize: 14,
    },
  });

export default getStyles;
