import React from 'react';
import {View} from 'react-native';
import getStyles from './Styles';
import { useThemeStyles } from '../../../shared/theme/ThemeStyles';
import CustomTextInput from '../../../atoms/CustomTextInput';

const SignupForm = () => {
  const styles = useThemeStyles(getStyles);
  const mobIcon = 'phone-portrait-sharp';

  return (
    <View style={styles.upperCont}>
    <CustomTextInput
      lable={'Mobile number'}
      prefixIcon={mobIcon}
      validateInput={() => {}}
    />
  </View>
  );
};

export default SignupForm;
