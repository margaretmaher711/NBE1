import {StyleSheet} from 'react-native';

const getStyles = () =>
    StyleSheet.create({
        sendMoneyCard: {
          height: 86,
          width: 78,
          backgroundColor: '#fff',
          borderRadius: 18,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        },
        sendMoneyContainer: {
          marginTop: 15,
        },
        logoImage: {
          width: 34,
          height: 34,
          resizeMode: 'contain',
        },
        title: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        name: {
          color: '#000',
        },
      });
export default getStyles;
