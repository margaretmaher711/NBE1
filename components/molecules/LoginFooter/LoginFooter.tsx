import React from 'react';
import {View} from 'react-native';
import CopyRightText from '../../atoms/copyright';
import ContactMolecule from '../contactmolecule';
import { useThemeStyles } from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

const LoginFooter = () => {
  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.rowContainer}>
      <ContactMolecule />
      <CopyRightText />
    </View>
  );
};
// const styles = 
export default LoginFooter;
