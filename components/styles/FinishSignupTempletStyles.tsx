import {StyleSheet} from 'react-native';

const getStyles = () =>
  StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginTop: 15,
      flex: 1,
      backgroundColor: 'transparent',
      textAlign: 'center',
    },
    upperCont: {flex: 5},

    lowerCont: {
      flexDirection: 'row',
      flex: 0.5,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default getStyles;
