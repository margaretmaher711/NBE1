import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    iconContainer: {
      width: 33,
      height: 33,
      backgroundColor: themeColors.grayBG,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      margin: 0,
      padding: 0,
    },

    drawerLabelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    drawerItemStyle: {
      borderRadius: 12,
    },
    drawerStyle: {
      borderBottomRightRadius: 40,
      borderTopRightRadius: 40,
    },
    container: {
      flex: 1,
    },
  });

export default getStyles;
