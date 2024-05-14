import React from 'react';
import {StyleSheet} from 'react-native';
import BalanceCard from '../molecules/BalanceCard';
import HomeAppBar from '../organism/HomeAppBar';
import HomeCards from '../organism/HomeCards';
import HomeHistory from '../organism/HomeHistory';
import HomeSendMoney from '../organism/HomeSendMoney';
import {useNavigation} from '@react-navigation/native';

function HomeTemplet(): React.JSX.Element {
  const lockIcon = 'lock-closed-outline';
  const navigation = useNavigation();

  return (
    <>
      <HomeAppBar />
      <BalanceCard balanceVal={'$2,374,654.25'} />
      <HomeCards onPressCard={() => navigation.navigate('cards')} />
      <HomeSendMoney />
      <HomeHistory />
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
export default HomeTemplet;
