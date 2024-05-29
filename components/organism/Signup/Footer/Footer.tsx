import React from 'react';
import {Text, View} from 'react-native';
import {useThemeStyles} from '../../../shared/theme/ThemeStyles';
import CustomButton from '../../../atoms/custombutton';
import HighlightText from '../../../atoms/Text/HighlightText/HighLightText';
import getStyles from './Styles';

const Footer = ({navigation}) => {
  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.lowerCont}>
    <View style={styles.loginContainer}>
      <CustomButton
        title="Next"
        onPressButton={() => navigation.navigate('otp')}
      />
    </View>
    <View style={styles.container}>
      <Text
        style={styles.textStyle}>
        By signing up, you agree to our{' '}
        <HighlightText title={'Terms of Service'} /> and acknowledge that
        you have read our <HighlightText title={'Privacy Policy'} />.
      </Text>
    </View>
  </View>
  );
};

export default Footer;
