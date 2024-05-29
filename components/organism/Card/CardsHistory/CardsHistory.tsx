import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import HistoryCard from '../../../molecules/HistoryCard';
import { historyCards } from "./Data";
const CardHistory = () => {

  return (
    <>
      <FlatList
        data={historyCards}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => {
          item.id = index.toString();
          return item.id;
        }}
        renderItem={itemData => {
          return <HistoryCard image={true} item={itemData.item} />;
        }}
        alwaysBounceVertical={false}
      />
    </>
  );
};

export default CardHistory;
