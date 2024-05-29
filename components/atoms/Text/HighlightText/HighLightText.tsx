import React from 'react';
import {Text} from 'react-native';
import { useThemeStyles } from '../../../shared/theme/ThemeStyles';
import getStyles from './Style';

const HighlightText: React.FC<{title: string}> = ({title}) => {

  const styles = useThemeStyles(getStyles);

  return (
    <Text style={styles.highlight}>{title}</Text>

  );
};

export default HighlightText;
