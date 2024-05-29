import React from 'react';
import {Text, View} from 'react-native';
import { useThemeStyles } from '../../../shared/theme/ThemeStyles';
import getStyles from './Style';

const Title: React.FC<{title: string}> = ({title}) => {

  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.cardTitles}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
