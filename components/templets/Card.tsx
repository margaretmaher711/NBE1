import React from 'react';
import HomeAppBar from '../organism/HomeAppBar';
import CardHistory from '../organism/CardsHistory';
import CreditCardHomeCards from '../organism/CreditCard';
import Title from '../atoms/Text/Title/Title';
function CardsTemplet({navigation}): React.JSX.Element {
  return (
    <>
      <HomeAppBar navigation={navigation} />
      <Title title={'Cards'} />
      <CreditCardHomeCards />
      <Title title={'History'} />
      <CardHistory />
    </>
  );
}

export default CardsTemplet;
