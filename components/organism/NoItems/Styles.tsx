import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
    StyleSheet.create({
        emptyContainer: {
          flex: 1,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 55,
        },
        modalText: {
          marginBottom: 14,
          textAlign: 'center',
          fontWeight: '400',
          color: themeColors.noDataMsg,
          lineHeight: 23.44,
          // height:23.44
        },
        modalTitleText: {
          marginBottom: 18,
          textAlign: 'center',
          fontWeight: '500',
          lineHeight: 23.44,
          color: themeColors.noDataMsg,
        },
      });

export default getStyles;
