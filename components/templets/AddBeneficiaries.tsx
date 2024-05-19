import React, {useState} from 'react';

import HomeAppBar from '../organism/HomeAppBar';
import EmptyBeneficiaries from '../organism/EmptyBeneficiaries';
import GridBeneficiaries from '../organism/GridBeneficiaries';
import ListBeneficiaries from '../organism/ListBeneficiaries';
import SecBenefAppBar from '../organism/SecBenefAppBar';
import SignupAppBarOrganism from '../organism/signupappbar';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function AddBeneficiariesTemplet({navigation}): React.JSX.Element {
  const img1 = require('../../assets/halaImg.png');

  return (
    <>
      <SignupAppBarOrganism />
      <View style={styles.camiraContainer}>
        <Icon name={'camera-outline'} size={50} color={'#007236'} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  camiraContainer: {
    height: 138,
    width: 138,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    // textAlign: 'center',
  },
});

export default AddBeneficiariesTemplet;
