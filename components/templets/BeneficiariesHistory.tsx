import React from 'react';

import HomeAppBar from '../organism/HomeAppBar';
import EmptyBeneficiaries from '../organism/EmptyScreen';
import ListBeneficiaries from '../organism/ListBeneficiaries';
import BeneficiaryListItem from '../molecules/BeneficiaryListItem';
import CardTitle from '../atoms/CardsTitles';
import {FlatList, View} from 'react-native';
import HistoryCard from '../molecules/HistoryCard';
import { useRoute } from '@react-navigation/native';

function BeneficiariesHistoryTemplet({ navigation}): React.JSX.Element {
  const route = useRoute();

  const userCard = route.params;

  const beneficiariesHistory: ArrayLike<beneficiariesHistoryList> = [
    {
      name: 'Flat Rent',
      id: '',

      phoneNum: '+20 123 456 7890',
      date: '15-5-2024',
      amount: '$802,828.61',
    },
    {
      name: 'House Fixes',
      id: '',
      phoneNum: '+20 123 456 7890',
      date: '15-5-2024',
      amount: '$764,92.0',
    },
    {
      name: 'New Laptop',
      id: '',

      phoneNum: '+20 123 456 7890',
      date: '15-5-2024',
      amount: '$647,67.0',
    },
    {
      name: 'Car Loan',
      id: '',

      phoneNum: '+20 123 456 7890',
      date: '15-5-2024',
      amount: '$563,62.0',
    },
    {
      name: 'College Expenses',
      id: '',

      phoneNum: '+20 123 456 7890',
      date: '15-5-2024',
      amount: '$755,45.0',
    },
    {
      name: 'Mom wants some money',
      id: '',
      phoneNum: '+20 123 456 7890',
      date: '15-5-2024',
      amount: '$743,45.0',
    },
    {
      name: 'New dress',
      id: '',
      phoneNum: '+20 123 456 7890',
      date: '15-5-2024',
      amount: '$743,45.0',
    },
    {
      name: 'Birthday gift for ross and rachel',
      id: '',
      phoneNum: '+20 123 456 7890',
      date: '15-5-2024',
      amount: '$743,45.0',
    },
  ];
  interface beneficiariesHistoryList {
    name: string;
    phoneNum: string;
    amount: string;
    id: string;
    date: string;
  }
  // console.log('userCard', userCard);

  return (
    <>
      <HomeAppBar navigation={navigation} />
      <BeneficiaryListItem item={userCard} />
      <CardTitle title={'Transactions History'} />
      {beneficiariesHistory.length == 0 && (
        <EmptyBeneficiaries
          title={'No History'}
          subTitle={'Not a single transaction was made to this account'}
          img={require('../../assets/nohistory.png')}
        />
      )}
      {beneficiariesHistory.length !== 0 && (
        <FlatList
          data={beneficiariesHistory}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => {
            item.id = index.toString();
            return item.id;
          }}
          renderItem={itemData => {
            // const imgName = itemData.item.image;

            return <HistoryCard image={false} item={itemData.item} />;
          }}
          alwaysBounceVertical={false}
        />
      )}
      <View style={{height: 80}}></View>
    </>
  );
}

export default BeneficiariesHistoryTemplet;
