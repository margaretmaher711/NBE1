import React from 'react';
import BalanceCard from '../molecules/BalanceCard';
import HomeAppBar from '../organism/HomeAppBar';
import HomeCards from '../organism/HomeCards';
import HomeHistory from '../organism/HomeHistory';
import HomeSendMoney from '../organism/HomeSendMoney';
import HomeTitle from '../molecules/TitleViewAll/TitleViewAll';

function HomeTemplet({navigation}): React.JSX.Element {
  return (
    <>
      <HomeAppBar navigation={navigation} />
      <BalanceCard balanceVal={'$2,374,654.25'} />
      <HomeCards />
      <HomeSendMoney />
      <HomeTitle title={'History'} />
      <HomeHistory />
    </>
  );
}

export default HomeTemplet;
