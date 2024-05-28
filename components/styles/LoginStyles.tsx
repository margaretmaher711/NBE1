import {Dimensions, StyleSheet} from 'react-native';

const getStyles = () =>
    StyleSheet.create({
        image: {
          height: Dimensions.get('screen').height,
          flex: 1,
          justifyContent: 'center',
          resizeMode: 'cover',
        },
        container: {
            marginHorizontal: 16,
            marginTop: 15,
            flex: 1,
            backgroundColor: 'transparent',
            textAlign: 'center',
          },
      });

export default getStyles;
