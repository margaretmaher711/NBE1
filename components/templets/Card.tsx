import React from 'react';
import {StyleSheet} from 'react-native';
import BalanceCard from '../molecules/BalanceCard';
import HomeAppBar from '../organism/HomeAppBar';
import CardHistory from '../organism/CardsHistory';
import CreditCard from '../organism/CreditCard';
function CardsTemplet(): React.JSX.Element {
  const lockIcon = 'lock-closed-outline';

  return (
    <>
      <HomeAppBar />
      <CreditCard />
      <CardHistory />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 15,
    flex: 1,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  upperCont: {flex: 5},

  lowerCont: {
    flexDirection: 'row',
    flex: 0.5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default CardsTemplet;
