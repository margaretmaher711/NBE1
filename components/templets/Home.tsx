import React from 'react';
import BalanceCard from '../molecules/BalanceCard';
import HomeAppBar from '../organism/HomeAppBar';
import HomeCards from '../organism/HomeCards';
import HomeHistory from '../organism/HomeHistory';
import HomeSendMoney from '../organism/HomeSendMoney';
import {HoomeDrawer} from '../organism/HomeDrawer';

function HomeTemplet({navigation}): React.JSX.Element {
  return (
    <>
      <HomeAppBar navigation={navigation} />
      <BalanceCard balanceVal={'$2,374,654.25'} />
      <HomeCards />
      <HomeSendMoney />
      <HomeHistory />
    </>
  );
}

export default HomeTemplet;
