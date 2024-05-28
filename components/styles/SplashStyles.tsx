import {Dimensions, StyleSheet} from 'react-native';

const getStyles = themeColors =>
    StyleSheet.create({
        contant: {
          marginTop: Dimensions.get('screen').height / 3,
    
          flex: 1,
          marginBottom: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        screenContainer: {
          backgroundColor: themeColors.themeColor,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        logoImage: {
          width: 110,
          height: 130,
        },
        bankImg: {
          width: 130,
          height: 40,
        },
      });

export default getStyles;
