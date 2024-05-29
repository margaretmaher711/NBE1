import React, {useState} from 'react';

import AppBarPrim from '../../../organism/AppBar/AppBarPrim';
import EmptyBeneficiaries from '../../../organism/NoItems/NoItem';
import GridBeneficiaries from '../../../organism/GridBeneficiaries';
import ListBeneficiaries from '../../../organism/ListBeneficiaries';
import SecBenefAppBar from '../../../organism/SecBenefAppBar';
import {sendMoneyCards} from './Data';

function BeneficiariesTemplet({navigation}): React.JSX.Element {
  const [isGrid, setGrid] = useState(false);

  return (
    <>
      <AppBarPrim navigation={navigation} />
      <SecBenefAppBar isGrid={isGrid} setGrid={setGrid} />
      {sendMoneyCards.length == 0 && (
        <EmptyBeneficiaries
          title={'No Beneficiaries'}
          subTitle={
            'You don’t have beneficiaries, add some so you can send money'
          }
          img={require('../../../../assets/NoBeneficiaries.png')}
          addBeneficiary={true}
        />
      )}
      {sendMoneyCards.length !== 0 &&
        (isGrid ? (
          <GridBeneficiaries sendMoneyCards={sendMoneyCards} />
        ) : (
          <ListBeneficiaries sendMoneyCards={sendMoneyCards} />
        ))}
    </>
  );
}

export default BeneficiariesTemplet;
