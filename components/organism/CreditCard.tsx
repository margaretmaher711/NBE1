import React from 'react';
import {FlatList, View} from 'react-native';

import CreditCard from '../molecules/CreditCardItem';
import CardTitle from '../atoms/CardsTitles';

const HomeCards = () => {
  const img1 = '../../assets/carrefour.png';
  const img2 = '../../assets/carrefour.png';

  const cardsList: ArrayLike<historyList> = [
    {
      cardNum: 'Carrefour',
      amount: '$125,381.15',
      date: '15-12-2021',
      id: '',
      image: img1,
    },
    {
      cardNum: 'Amazon',
      amount: '$3004.21',
      date: '02-12-2021',
      id: '',
      image: img1,
    },
    {
      cardNum: 'Jumia',
      amount: '$2146.63',
      date: '28-11-2021',
      id: '',
      image: img1,
    },
    {
      cardNum: 'Hala',
      amount: '$5140.00',
      date: '15-12-2021',
      id: '',
      image: img1,
    },
  ];
  interface historyList {
    cardNum: string;
    date: string;
    amount: string;
    image: string;
    id: string;
  }
  return (
    <View >
      <CardTitle title={'Cards'} />
      <FlatList
        horizontal={true}
        data={cardsList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => {
          item.id = index.toString();
          return item.id;
        }}
        renderItem={itemData => {
          return (
            <>
              <CreditCard creditCardVal={itemData.item.amount} />
              <View style={{width: 20}}></View>
            </>
          );
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default HomeCards;
