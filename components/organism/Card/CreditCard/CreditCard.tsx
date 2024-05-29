import React from 'react';
import {FlatList, View} from 'react-native';

import CreditCard from '../../../molecules/CreditCardItem';
import {cardsList} from './Data';
const HomeCards = () => {
  return (
    <View>
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
