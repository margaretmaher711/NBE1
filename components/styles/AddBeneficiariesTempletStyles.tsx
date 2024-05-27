import {StyleSheet} from 'react-native';

const getStyles = themeColors =>
  StyleSheet.create({
    textInput: {
      flex: 1,
      color: themeColors.commonBlack,
      paddingVertical: 5,
    },
    label: {
      position: 'absolute',
      top: 4,
      left: 10,
      backgroundColor: themeColors.commonWhite,
      paddingHorizontal: 5,
      fontSize: 14,
      fontWeight: '700',
      color: themeColors.darkBlue,
    },
    inputContainer: {
      marginVertical: 15,
      elevation: 4,
      shadowRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: themeColors.boxActiveColor,
      backgroundColor: themeColors.commonWhite,
      borderRadius: 10,
      height: 70,
      color: themeColors.commonWhite,
      paddingHorizontal: 10,
    },
    focusedContainer: {
      borderWidth: 1.5,
      color: themeColors.boxActiveColor,
    },
    flatListContent: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 10,
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    dropdown: {
      backgroundColor: '#fff',
      borderWidth: 0,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputPassContainer: {
      marginVertical: 15,
      borderWidth: 1.5,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: themeColors.boxActiveColor,
      backgroundColor: themeColors.commonWhite,
      borderRadius: 10,
      color: themeColors.commonBlack,
    },
    camiraContainer: {
      // flex:0.5,
      height: 138,
      width: 138,
      backgroundColor: themeColors.commonWhite,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      borderRadius: 30,
      // textAlign: 'center',
    },
  });

export default getStyles;
