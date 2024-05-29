import {CheckBox} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

const CheckBoxCustom = () => {
  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.checkbox}>
      <CheckBox checked={false} />
    </View>
  );
};
export default CheckBoxCustom;
