import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Divider} from '@rneui/base/dist/Divider/Divider';
import CardTitle from '../atoms/CardsTitles';

const CardHistory = () => {
  const img1 = require('../../assets/carrefour.png');
  const img2 = require('../../assets/anazon.png');
  const img3 = require('../../assets/jumia.png');
  const img4 = require('../../assets/halaImg.png');
  const historyCards: ArrayLike<historyList> = [
    {
      name: 'Carrefour',
      amount: '$2,555',
      date: '15-12-2021',
      id: '',
      image: img1,
    },
    {
      name: 'Amazon',
      amount: '$3004.21',
      date: '02-12-2021',
      id: '',
      image: img2,
    },
    {
      name: 'Jumia',
      amount: '$2146.63',
      date: '28-11-2021',
      id: '',
      image: img3,
    },
    {name: 'Hala', amount: '$5140.00', date: '15-12-2021', id: '', image: img1},
    {name: 'Hala', amount: '$5140.00', date: '15-12-2021', id: '', image: img1},
    {name: 'Hala', amount: '$5140.00', date: '15-12-2021', id: '', image: img1},
  ];
  interface historyList {
    name: string;
    date: string;
    amount: string;
    image: string;
    id: string;
  }
  return (
    <>
      <CardTitle title={'History'} />
      <FlatList
        data={historyCards}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => {
          item.id = index.toString();
          return item.id;
        }}
        renderItem={itemData => {
          const imgName = itemData.item.image;
          console.log('imgName', imgName);

          return (
            <>
              <View style={styles.historyCard}>
                <View style={styles.iconNameContainer}>
                  <Image source={itemData.item.image}></Image>
                  <View>
                    <Text style={styles.nametSty}>{itemData.item.name}</Text>
                    <Text style={styles.dateSty}>{itemData.item.date}</Text>
                  </View>
                </View>
                <Text style={styles.amountSty}>{itemData.item.amount}</Text>
              </View>
              <Divider />
            </>
          );
        }}
        alwaysBounceVertical={false}
      />
    </>
  );
};
const styles = StyleSheet.create({
  historyCard: {
    flexDirection: 'row',
    height: 69,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconNameContainer: {
    flex: 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountSty: {
    color: '#1C2437',
    fontSize: 18,
    fontWeight: '700',
  },
  dateSty: {
    color: '#B7B7B7',
    fontSize: 14,
    fontWeight: '400',
  },
  nametSty: {
    color: '#1C2437',
    fontSize: 18,
    fontWeight: '400',
  },
});
export default CardHistory;
