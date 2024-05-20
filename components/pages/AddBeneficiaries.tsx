import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import AddBeneficiariesTemplet from '../templets/AddBeneficiaries';
import {ScrollView} from 'react-native-gesture-handler';

function AddBeneficiaries({navigation}): React.JSX.Element {
  return (
    <SafeAreaView style={styles.contant}>
        <AddBeneficiariesTemplet navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contant: {
    // flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#F1F3FB',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  bottomNavIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
export default AddBeneficiaries;
