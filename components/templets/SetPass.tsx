import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';

import {useThemeCustome} from '../shared/theme/ThemeContext';
import CustomButton from '../atoms/custombutton';
import SignupTitles from '../molecules/SignupTitles';
import SignupAppBarOrganism from '../organism/signupappbar';
import CustomTextInput from '../atoms/CustomTextInput';
import CustomRoundedCheck from '../molecules/CustomRoundedCheck';

function SetPassTemplet({navigation}): React.JSX.Element {
  const passIcon = 'lock-closed-outline';
  const [passValue, setpassValue] = useState('');
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isMinimumLength, setIsMinimumLength] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);
  const [isMatchedInputs, setMatchedInputs] = useState(false);
  const {themeColors} = useThemeCustome(); // Access the theme colors
  const styles = StyleSheet.create({
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
  const validateInput = (inputText: string) => {
    // Example validation rule: input should not be empty
    // const isValidInput = inputText.trim() !== '';
    const hasLowerCase = /[a-z]/.test(inputText);
    const hasUpperCase = /[A-Z]/.test(inputText);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(inputText);
    const hasNumber = /\d/.test(inputText);
    const hasMinimumLength = inputText.length >= 8;
    const isValidInput =
      hasLowerCase &&
      hasUpperCase &&
      hasSpecialCharacter &&
      hasNumber &&
      hasMinimumLength;

    setpassValue(inputText);
    setIsLowerCase(hasLowerCase);
    setIsUpperCase(hasUpperCase);
    setIsSpecialCharacter(hasSpecialCharacter);
    setIsNumber(hasNumber);
    setIsMinimumLength(hasMinimumLength);
    setIsValidInput(isValidInput);
  };
  const validateConfirmInput = (inputText: string) => {
    if (inputText === passValue) {
      setMatchedInputs(true);
    } else {
      setMatchedInputs(false);
    }
  };
  return (
    <>
      <View style={styles.upperCont}>
        <SignupAppBarOrganism />
        <SignupTitles
          title="Set your password"
          subtitle="Enter a strong password for your online banking account"
        />
        <CustomTextInput
          lable={'Password'}
          prefixIcon={passIcon}
          validateInput={validateInput}
          text={passValue}
        />
        <CustomTextInput
          lable={'Confirm Password'}
          prefixIcon={passIcon}
          validateInput={validateConfirmInput}
        />
        <View style={styles.ckeckItemsContainer}>
          <View>
            <CustomRoundedCheck
              title={'Lower case letter'}
              checked={isLowerCase}
            />
            <CustomRoundedCheck
              title={'Minimum 8 characters'}
              checked={isMinimumLength}
            />
            <CustomRoundedCheck
              title={'Special character'}
              checked={isSpecialCharacter}
            />
          </View>
          <View>
            <CustomRoundedCheck
              title={'Upper case letter'}
              checked={isUpperCase}
            />
            <CustomRoundedCheck title={'Number'} checked={isNumber} />
          </View>
        </View>
      </View>

      <View style={styles.lowerCont}>
        <View style={styles.loginContainer}>
          {isMatchedInputs && isValidInput ? (
            <CustomButton
              title="Submit"
              onPressButton={() => navigation.navigate('finishsignup')}
            />
          ) : (
            <CustomButton
              title="Submit"
              onPressButton={() => null}
              opacity={0.7}
            />
          )}
        </View>
      </View>
    </>
  );
}

export default SetPassTemplet;
