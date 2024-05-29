import React from 'react';
import {Image, Text, View} from 'react-native';
import AddButton from '../../molecules/AddButton';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';
import {useThemeCustome} from '../../shared/theme/ThemeContext';

const EmptyScreen = ({title, subTitle, img, addBeneficiary = false}) => {
  const styles = useThemeStyles(getStyles);
  const {themeColors} = useThemeCustome();

  return (
    <View style={styles.emptyContainer}>
      <Image source={img}></Image>
      <Text style={styles.modalTitleText}>{title}</Text>
      <Text style={styles.modalText}>{subTitle}</Text>
      {addBeneficiary && (
        <AddButton
          textColor={themeColors.commonWhite}
          backColor={themeColors.boxActiveColor}
        />
      )}
    </View>
  );
};

export default EmptyScreen;
