import {Dimensions, StyleSheet} from 'react-native';

const getStyles = () =>
  StyleSheet.create({
    contant: {
      flex: 1,
    },
    image: {
      height: Dimensions.get('screen').height,
      flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover', // or 'stretch'
    },
   
  
  });

export default getStyles;
