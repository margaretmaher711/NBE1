import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useTheme} from '../theme/ThemeContext';
const CustomTextInput: React.FC<{
  lable: string;
  validateInput: (text: string) => void;
  text: string;
  keyboardType: KeyboardTypeOptions;
}> = ({lable, keyboardType, validateInput, text}) => {
  const [isAccNumFocused, setIsAccNumFocused] = useState(false);
  const {themeColors} = useTheme();
  const styles = StyleSheet.create({
    textInput: {
      flex: 1,
      color: themeColors.textColor,
      paddingVertical: 5,
    },
    label: {
      position: 'absolute',
      top: 4,
      left: 10,
      paddingHorizontal: 5,
      fontSize: 14,
      fontWeight: '700',
      //   color: '#1C2437',

      color: themeColors.textColor,
    },
    inputContainer: {
      marginVertical: 15,
      elevation: 4,
      shadowRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: themeColors.themeColor,
      borderRadius: 10,
      height: 70,
      color: '#000',
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: themeColors.borderColor,
    },
    focusedContainer: {
      borderWidth: 1.5,
      color: '#007236',
      borderColor: '#007236',
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
  });
  return (
    <View
      style={[
        styles.inputContainer,
        isAccNumFocused && styles.focusedContainer,
      ]}>
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
  );
};

export default CustomTextInput;
