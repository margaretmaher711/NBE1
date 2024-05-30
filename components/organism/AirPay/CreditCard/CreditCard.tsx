import React from 'react';
import {FlatList, View} from 'react-native';
import {cardsList} from './Data';
import CreditCardAirPayItem from '../../../molecules/AirPay/CreditCardAirPayItem';

const CreditCardAirPayList = ({dropZoneValues}) => {
  return (
    <FlatList
      style={{}}
      removeClippedSubviews={false}
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
            <CreditCardAirPayItem
              creditCardVal={itemData.item.amount}
              dropZoneValues={dropZoneValues}
            />
            <View style={{width: 20}}></View>
          </>
        );
      }}
      alwaysBounceVertical={false}
    />
  );
};

export default CreditCardAirPayList;
