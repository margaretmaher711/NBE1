import React from 'react';
import {StyleSheet, View} from 'react-native';

import HomeNamedCard from '../molecules/HomeNamedCard';

const HomeCards = () => {
  const historyImg = '../../assets/historyImg.png';
  const cardImg = '../../assets/cardImg.png';
  const utilityImg = '../../assets/utilityImg.png';
  const accountImg = '../../assets/monyImg.png';

  return (
    <View style={styles.homeShowCards}>
      <HomeNamedCard
        backgrounC={'#00C97426'}
        cardImg={require(accountImg)}
        title={'Accounts'}
      />
      <HomeNamedCard
        backgrounC={'#00ADF826'}
        cardImg={require(cardImg)}
        title={'Cards'}
      />
      <HomeNamedCard
        backgrounC={'#F6A72126'}
        cardImg={require(utilityImg)}
        title={'Utilities'}
      />
      <HomeNamedCard
        backgrounC={'#FF002E26'}
        cardImg={require(historyImg)}
        title={'History'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  homeShowCards: {
    // flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default HomeCards;
