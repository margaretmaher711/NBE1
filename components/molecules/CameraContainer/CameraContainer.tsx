import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

const CameraContainer = () => {
  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.camiraContainer}>
      <Icon name={'camera-outline'} size={50} style={styles.iconStyle} />
    </View>
  );
};

export default CameraContainer;
