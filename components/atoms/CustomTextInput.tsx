import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useThemeCustome} from '../shared/theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomTextInput: React.FC<{
  lable: string;
  validateInput: (text: string) => void;
  text: string;
  keyboardType: KeyboardTypeOptions;
  prefixIcon: string;
}> = ({lable, keyboardType, validateInput, text, prefixIcon = null}) => {
  const [isAccNumFocused, setIsAccNumFocused] = useState(false);
  const {themeColors} = useThemeCustome();
  const styles = StyleSheet.create({
    textInput: {
      flex: 1,
      color: themeColors.textColor,
      paddingVertical: 5,
      paddingHorizontal: 12,
    },
    label: {
      paddingHorizontal: 10,
      fontSize: 14,
      fontWeight: '700',

      color: themeColors.textColor,
    },
    inputContainer: {
      marginVertical: 15,

      elevation: 4,
      shadowRadius: 10,
      flexDirection: 'row',
      backgroundColor: themeColors.themeColor,
      borderRadius: 10,
      height: 70,
      color: '#000',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: themeColors.borderColor,
    },
    focusedContainer: {
      borderWidth: 1.5,
      color: themeColors.boxActiveColor,
      borderColor: themeColors.boxActiveColor,
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
      backgroundColor: themeColors.commonWhite,
      borderWidth: 0,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },
    iconPrefix: {
      marginTop: 10,
      color: '#B7B7B7',
    },
  });
  return (
    <View
      style={[
        styles.inputContainer,
        isAccNumFocused && styles.focusedContainer,
      ]}>
      {/* if prefixIcon != null showImage */}
      {prefixIcon && (
        <Icon name={prefixIcon} size={24} style={styles.iconPrefix} />
      )}
      <View>
        <Text style={[styles.label, isAccNumFocused && {color: '#007236'}]}>
          {lable}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#007236"
          onFocus={() => setIsAccNumFocused(true)}
          onBlur={() => setIsAccNumFocused(false)}
          onChangeText={e => validateInput(e)}
          keyboardType={keyboardType}
          value={text}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

// import React, {useState} from 'react';
// import {
//   KeyboardTypeOptions,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import {useThemeCustome} from '../theme/ThemeContext';
// const CustomTextInput: React.FC<{
//   lable: string;
//   validateInput: (text: string) => void;
//   text: string;
//   keyboardType: KeyboardTypeOptions;
// }> = ({lable, keyboardType, validateInput, text}) => {
//   const [isAccNumFocused, setIsAccNumFocused] = useState(false);
//   const {themeColors} = useThemeCustome();
//   const styles = StyleSheet.create({
//     textInput: {
//       flex: 1,
//       color: themeColors.textColor,
//       paddingVertical: 5,
//     },
//     label: {
//       position: 'absolute',
//       top: 4,
//       left: 10,
//       paddingHorizontal: 5,
//       fontSize: 14,
//       fontWeight: '700',

//       color: themeColors.textColor,
//     },
//     inputContainer: {
//       marginVertical: 15,
//       elevation: 4,
//       shadowRadius: 10,
//       flexDirection: 'row',
//       alignItems: 'center',
//       backgroundColor: themeColors.themeColor,
//       borderRadius: 10,
//       height: 70,
//       color: '#000',
//       paddingHorizontal: 10,
//       borderWidth: 1,
//       borderColor: themeColors.borderColor,
//     },
//     focusedContainer: {
//       borderWidth: 1.5,
//       color: themeColors.boxActiveColor,
//       borderColor: themeColors.boxActiveColor,
//     },
//     flatListContent: {
//       flexGrow: 1,
//       justifyContent: 'space-between',
//     },
//     buttonContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'flex-end',
//       marginTop: 10,
//     },
//     content: {
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     dropdown: {
//       backgroundColor: themeColors.commonWhite,
//       borderWidth: 0,
//       borderBottomLeftRadius: 10,
//       borderBottomRightRadius: 10,
//       borderTopRightRadius: 0,
//       borderTopLeftRadius: 0,
//     },
//   });
//   return (
//     <View
//       style={[
//         styles.inputContainer,
//         isAccNumFocused && styles.focusedContainer,
//       ]}>
//       <Text style={[styles.label, isAccNumFocused && {color: '#007236'}]}>
//         {lable}
//       </Text>
//       <TextInput
//         style={styles.textInput}
//         placeholderTextColor="#007236"
//         onFocus={() => setIsAccNumFocused(true)}
//         onBlur={() => setIsAccNumFocused(false)}
//         onChangeText={e => validateInput(e)}
//         keyboardType={keyboardType}
//         value={text}
//       />
//     </View>
//   );
// };

// export default CustomTextInput;
