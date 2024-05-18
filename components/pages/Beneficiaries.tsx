import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import BeneficiariesTemplet from '../templets/Beneficiaries';

function Beneficiaries({navigation}): React.JSX.Element {
  return (
    <SafeAreaView style={styles.contant}>
      <BeneficiariesTemplet navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contant: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#F1F3FB',
  },
  bottomNavIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
export default Beneficiaries;
