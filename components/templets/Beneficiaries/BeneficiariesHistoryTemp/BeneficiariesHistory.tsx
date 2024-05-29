import React from 'react';

import AppBarPrim from '../../../organism/AppBar/AppBarPrim';
import EmptyBeneficiaries from '../../../organism/NoItems/NoItem';
import BeneficiaryListItem from '../../../molecules/BeneficiaryListItem';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import TransactionHistory from '../../../organism/TransactionHistory';
import Title from '../../../atoms/Text/Title/Title';
import {beneficiariesHistory} from './Data';

function BeneficiariesHistoryTemplet({navigation}): React.JSX.Element {
  const route = useRoute();

  const userCard = route.params;


  return (
    <>
      <AppBarPrim navigation={navigation} />
      <BeneficiaryListItem item={userCard} />
      <Title title={'Transactions History'} />
      {beneficiariesHistory.length == 0 && (
        <EmptyBeneficiaries
          title={'No History'}
          subTitle={'Not a single transaction was made to this account'}
          img={require('../../../../assets/nohistory.png')}
        />
      )}
      {beneficiariesHistory.length !== 0 && (
        <TransactionHistory beneficiariesHistory={beneficiariesHistory} />
      )}
      <View style={{height: 80}}></View>
    </>
  );
}

export default BeneficiariesHistoryTemplet;
