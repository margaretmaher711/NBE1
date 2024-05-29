import React from 'react';
import AppBarPrim from '../../organism/AppBar/AppBarPrim';
import CardHistory from '../../organism/Card/CardsHistory/CardsHistory';
import CreditCardHomeCards from '../../organism/Card/CreditCard/CreditCard';
import Title from '../../atoms/Text/Title/Title';
function CardsTemplet({navigation}): React.JSX.Element {
  return (
    <>
      <AppBarPrim navigation={navigation} />
      <Title title={'Cards'} />
      <CreditCardHomeCards />
      <Title title={'History'} />
      <CardHistory />
    </>
  );
}

export default CardsTemplet;
