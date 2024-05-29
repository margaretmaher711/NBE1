import React from 'react';
import BalanceCard from '../molecules/BalanceCard/BalanceCard';
import AppBarPrim from '../organism/AppBar/AppBarPrim';
import HomeCards from '../organism/HomeCards/HomeCards';
import HomeHistory from '../organism/HomeHistory';
import HomeSendMoney from '../organism/HomeSendMoney/HomeSendMoney';
import HomeTitle from '../molecules/TitleViewAll/TitleViewAll';

function HomeTemplet({navigation}): React.JSX.Element {
  return (
    <>
      <AppBarPrim navigation={navigation} />
      <BalanceCard balanceVal={'$2,374,654.25'} />
      <HomeCards />
      <HomeSendMoney />
      <HomeTitle title={'History'} />
      <HomeHistory />
    </>
  );
}

export default HomeTemplet;
