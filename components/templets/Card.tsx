import React from 'react';
import HomeAppBar from '../organism/HomeAppBar';
import CardHistory from '../organism/CardsHistory';
import CreditCardHomeCards from '../organism/CreditCard';
import CardTitle from '../atoms/CardsTitles';
function CardsTemplet({navigation}): React.JSX.Element {
  return (
    <>
      <HomeAppBar navigation={navigation} />
      <CardTitle title={'Cards'} />
      <CreditCardHomeCards />
      <CardTitle title={'History'} />
      <CardHistory />
    </>
  );
}

export default CardsTemplet;
