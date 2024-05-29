import {StyleSheet} from 'react-native';

const getStyles = () =>
  StyleSheet.create({
    keyboardAvoidingView: {
      flex: 1,
    },
    loginContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    upperCont: {flex: 2},
    lowerCont: {
      flex: 0.5,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    container: {
      marginTop: 20,
    },
  
  });

export default getStyles;
