import React from 'react';
import {FlatList} from 'react-native';

import HistoryCard from '../molecules/HistoryCard';

const TransactionHistory = ({beneficiariesHistory}) => {

  return (
    <FlatList
    data={beneficiariesHistory}
    showsVerticalScrollIndicator={false}
    keyExtractor={(item, index) => {
      item.id = index.toString();
      return item.id;
    }}
    renderItem={itemData => {
      // const imgName = itemData.item.image;

      return <HistoryCard image={false} item={itemData.item} />;
    }}
    alwaysBounceVertical={false}
  />
  );
};

export default TransactionHistory;
