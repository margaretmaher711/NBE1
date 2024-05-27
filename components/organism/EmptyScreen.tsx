import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AddButton from '../molecules/AddButton';
import {useThemeCustome} from '../shared/theme/ThemeContext';

const EmptyScreen = ({title, subTitle, img, addBeneficiary = false}) => {
  const {themeColors} = useThemeCustome();
  const styles = StyleSheet.create({
    emptyContainer: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 55,
    },
    modalText: {
      marginBottom: 14,
      textAlign: 'center',
      fontWeight: '400',
      color: themeColors.noDataMsg,
      lineHeight: 23.44,
      // height:23.44
    },
    modalTitleText: {
      marginBottom: 18,
      textAlign: 'center',
      fontWeight: '500',
      lineHeight: 23.44,
      color: themeColors.noDataMsg,
    },
  });
  return (
    <View style={styles.emptyContainer}>
      <Image source={img}></Image>
      <Text style={styles.modalTitleText}>{title}</Text>
      <Text style={styles.modalText}>{subTitle}</Text>
      {addBeneficiary && <AddButton textColor={'#fff'} backColor={'#007236'} />}
    </View>
  );
};

export default EmptyScreen;
