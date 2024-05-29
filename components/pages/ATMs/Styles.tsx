import {StyleSheet} from 'react-native';

const getStyles = () =>
    StyleSheet.create({
        container: {
          flex: 1,
        },
      
        appBarContainer: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          marginHorizontal: 20,
          marginVertical: 15,
        },
        contant: {
          marginHorizontal: 20,
          marginVertical: 15,
          backgroundColor: 'transparent',
        },
      });

export default getStyles;
