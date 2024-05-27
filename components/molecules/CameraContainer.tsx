// src/molecules/CameraContainer.js

import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useThemeCustome} from '../shared/theme/ThemeContext';

const CameraContainer = ({style}) => {
  const {themeColors} = useThemeCustome();

  return (
    <View style={style}>
      <Icon
        name={'camera-outline'}
        size={50}
        color={themeColors.boxActiveColor}
      />
    </View>
  );
};

export default CameraContainer;
