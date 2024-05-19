import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Divider} from '@rneui/base/dist/Divider/Divider';
import CardTitle from '../atoms/CardsTitles';
import AddButton from '../molecules/AddButton';

const EmptyBeneficiaries = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image source={require('../../assets/NoBeneficiaries.png')}></Image>

      <Text style={styles.modalTitleText}>No Beneficiaries</Text>
      <Text style={styles.modalText}>
        You don’t have beneficiaries, add some so you can send money
      </Text>
      <AddButton textColor={'#fff'} backColor={'#007236'} />
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
export default EmptyBeneficiaries;
