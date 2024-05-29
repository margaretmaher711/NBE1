import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
    StyleSheet.create({
        contant: {
          marginHorizontal: 20,
          flex: 1,
          marginVertical: 15,
        },
        screenContainer: {
          backgroundColor: themeColors.themeColor,
          flex: 1,
        },
        bottomNavIcon: {
          width: 25,
          height: 25,
          resizeMode: 'contain',
        },
       
          
        
      });

export default getStyles;
