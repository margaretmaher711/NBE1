import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    lowerCont: {
      flex: 0.5,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    loginContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    container: {
      marginTop: 20,
    },
    textStyle: {
      color: themeColors.darkBlue,
    },
  });

export default getStyles;
