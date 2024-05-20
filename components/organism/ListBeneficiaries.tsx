import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BeneficiaryListItem from '../molecules/BeneficiaryListItem';

const ListBeneficiaries = ({sendMoneyCards}) => {
  const navigation = useNavigation();

  return (
    <>
      <FlatList
        key="list" // Unique key for list view
        showsVerticalScrollIndicator={false}
        data={sendMoneyCards}
        renderItem={itemData => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('beneficiariesHistory',itemData.item)}>
                <BeneficiaryListItem item={itemData.item} />
              </TouchableOpacity>
              <View style={{height: 20}}></View>
            </>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        alwaysBounceVertical={false}
      />
      <View style={{height: 60}}></View>
    </>
  );
};

export default ListBeneficiaries;
