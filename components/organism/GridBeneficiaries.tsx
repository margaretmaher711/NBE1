import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const GridBeneficiaries = ({sendMoneyCards}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    sendMoneyCard: {
      height: 86,
      width: 78,
      backgroundColor: '#fff',
      borderRadius: 18,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 3,
    },
    logoImage: {
      resizeMode: 'contain',
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
    },
    nametSty: {
      color: '#1C2437',
      fontSize: 14,
      fontWeight: '400',
      textAlign: 'center',
    },
  });
  return (
    <FlatList
      key="grid" // Unique key for grid view
      showsVerticalScrollIndicator={false}
      data={sendMoneyCards}
      renderItem={itemData => {
        return (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('beneficiariesHistory', itemData.item)
              }>
              <View style={styles.sendMoneyCard}>
                <Image source={itemData.item.image} style={styles.logoImage} />
                <Text style={styles.nametSty}>{itemData.item.name}</Text>
              </View>
            </TouchableOpacity>
            <View style={{width: 13}}></View>
          </>
        );
      }}
      numColumns={4}
      keyExtractor={(item, index) => index.toString()}
      alwaysBounceVertical={false}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
    />
  );
};

export default GridBeneficiaries;
