import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const GridBeneficiaries = ({sendMoneyCards}) => {
  const navigation = useNavigation();

  return (
    <FlatList
      key="grid" // Unique key for grid view
      showsVerticalScrollIndicator={false}
      data={sendMoneyCards}
      renderItem={itemData => {
        const imgName = itemData.item.image;
        console.log('imgName', imgName);

        return (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('beneficiariesHistory',itemData.item)}>
              <View style={styles.sendMoneyCard}>
                <Image source={itemData.item.image} style={styles.logoImage} />
                <Text>{itemData.item.name}</Text>
              </View>
            </TouchableOpacity>
            <View style={{width: 20}}></View>

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
const styles = StyleSheet.create({
  sendMoneyCard: {
    height: 86,
    width: 78,
    backgroundColor: '#fff',
    borderRadius: 18,

    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logoImage: {
    resizeMode: 'contain',
  },
});
export default GridBeneficiaries;
