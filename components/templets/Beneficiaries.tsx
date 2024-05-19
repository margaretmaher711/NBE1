import React, { useState } from 'react';

import HomeAppBar from '../organism/HomeAppBar';
import EmptyBeneficiaries from '../organism/EmptyBeneficiaries';
import GridBeneficiaries from '../organism/GridBeneficiaries';
import ListBeneficiaries from '../organism/ListBeneficiaries';
import SecBenefAppBar from '../organism/SecBenefAppBar';

function BeneficiariesTemplet({navigation}): React.JSX.Element {
  const img1 = require('../../assets/halaImg.png');
  const img2 = require('../../assets/aymanImg.png');
  const [isGrid, setGrid] = useState(false);

  const sendMoneyCards: ArrayLike<sendMoneyList> = [
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img2,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
    {
      name: 'Jasmine Robert',
      id: '',
      image: img1,
      phoneNum: '+20 123 456 7890',
      amount: '$802,828.61',
    },
  ];
  interface sendMoneyList {
    name: string;
    phoneNum: string;
    amount: string;
    image: string;
    id: string;
  }
  return (
    <>
      <HomeAppBar navigation={navigation} />
      <SecBenefAppBar isGrid={isGrid} setGrid={setGrid}/>
      {sendMoneyCards.length == 0 && <EmptyBeneficiaries />}
      {isGrid ? (
        <GridBeneficiaries sendMoneyCards={sendMoneyCards} />
      ) : (
        <ListBeneficiaries sendMoneyCards={sendMoneyCards} />
      )}
    </>
  );
}

export default BeneficiariesTemplet;
