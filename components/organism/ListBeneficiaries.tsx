import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const ListBeneficiaries = ({sendMoneyCards}) => {
  const phoneIcon = require('../../assets/callicon.png');
  const dollarIcon = require('../../assets/dolarsign.png');
  return (
    <>
      <FlatList
        key="list" // Unique key for list view
        showsVerticalScrollIndicator={false}
        data={sendMoneyCards}
        renderItem={itemData => {
          const imgName = itemData.item.image;
          console.log('imgName', imgName);

          return (
            <>
              <View style={styles.sendMoneyCardList}>
                <Image
                  source={itemData.item.image}
                  style={styles.logoListImage}
                />
                <View>
                  <Text style={styles.nameText}>{itemData.item.name}</Text>
                  <View style={styles.rowContainerData}>
                    <Image source={phoneIcon} />
                    <Text style={styles.greyText}>
                      {itemData.item.phoneNum}
                    </Text>
                  </View>
                  <View style={styles.rowContainerData}>
                    <Image source={dollarIcon} />
                    <Text style={styles.greyText}>{itemData.item.amount}</Text>
                  </View>
                </View>
              </View>
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
const styles = StyleSheet.create({
  greyText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B7B7B7',
    lineHeight: 16.41,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.41,
    color: '#1C2437',
  },
  rowContainerData: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  sendMoneyCardList: {
    elevation: 5,
    shadowRadius: 18,
    flexDirection: 'row',
    height: 86,
    // width: 78,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 15,
    // justifyContent:'center',
    alignItems: 'center',
  },
  logoListImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: 'contain',
  },
});
export default ListBeneficiaries;
