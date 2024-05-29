import React from 'react';
import {Text, View} from 'react-native';
import Title from '../../atoms/Text/Title/Title';
import { useThemeStyles } from '../../shared/theme/ThemeStyles';
import getStyles from './Style';

const HomeTitle: React.FC<{title: string}> = ({title}) => {
  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.homeTitles}>
      <Title title={title} />
      <Text style={styles.viewAll}>View All</Text>
    </View>
  );
};

export default HomeTitle;
