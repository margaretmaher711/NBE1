import {Dimensions, StyleSheet} from 'react-native';

const getStyles = themeColors =>
    StyleSheet.create({
        flatListContent: {
          flexGrow: 1,
          justifyContent: 'space-between',
        },
        container: {
          flex: 1,
          backgroundColor: themeColors.themeColor,
        },
        keyboardAvoidingView: {
          flex: 1,
        },
        upperContainer: {
          flex: 2,
          paddingHorizontal: 20,
          paddingVertical: 15,
        },
        lowerContainer: {
          flex: 0.5,
          paddingHorizontal: 20,
          paddingVertical: 15,
          alignItems: 'center',
        },
        buttonContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
      });

export default getStyles;
