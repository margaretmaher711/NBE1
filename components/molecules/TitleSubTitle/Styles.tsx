import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
    StyleSheet.create({
        title: {
          color: themeColors.darkBlue,
          fontSize: 20,
          fontWeight: '700',
          marginTop: 15,
        },
        subTitle: {
          color: '#B7B7B7',
          fontSize: 16,
          marginTop: 5,
        },
        rowContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

export default getStyles;
