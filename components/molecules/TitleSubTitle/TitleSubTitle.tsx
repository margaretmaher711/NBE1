import React from 'react';
import {Text} from 'react-native';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

const TitleSubTitle: React.FC<{title: string; subtitle: string}> = ({
  title,
  subtitle,
}) => {
  const styles = useThemeStyles(getStyles);

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </>
  );
};

export default TitleSubTitle;
