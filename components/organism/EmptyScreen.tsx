import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AddButton from '../molecules/AddButton';

const EmptyScreen = ({title, subTitle, img, addBeneficiary=false}) => {
  return (
    <View style={styles.emptyContainer}>
      <Image source={img}></Image>
      <Text style={styles.modalTitleText}>{title}</Text>
      <Text style={styles.modalText}>{subTitle}</Text>
      {addBeneficiary && (
        <AddButton textColor={'#fff'} backColor={'#007236'} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 14,
    textAlign: 'center',
    fontWeight: '400',
    color: '#464665',
    lineHeight: 23.44,
    // height:23.44
  },
  modalTitleText: {
    marginBottom: 18,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 23.44,
    color: '#34343F',
  },
});
export default EmptyScreen;
