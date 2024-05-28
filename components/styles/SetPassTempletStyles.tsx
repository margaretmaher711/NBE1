import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
    StyleSheet.create({
        ckeckItemsContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          // flexWrap:'wrap',
        },
        contant: {
          flex: 1,
          marginHorizontal: 20,
          marginVertical: 15,
          backgroundColor: '#F1F3FB',
        },
        loginContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
        upperCont: {flex: 6},
        lowerCont: {
          flex: 0.5,
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        },
    
        containerPad: {
          marginTop: 15,
        },
    
        container: {
          marginTop: 20,
        },
        highlight: {
          color: themeColors.darkBlue,
          fontWeight: 'bold',
        },
      });

export default getStyles;
