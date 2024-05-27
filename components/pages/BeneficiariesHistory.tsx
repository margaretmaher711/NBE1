import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import BeneficiariesTemplet from '../templets/Beneficiaries';
import BeneficiariesHistoryTemplet from '../templets/BeneficiariesHistory';
import {useThemeCustome} from '../shared/theme/ThemeContext';

function BeneficiariesHistory({navigation}): React.JSX.Element {
  const {themeColors} = useThemeCustome();
  const styles = StyleSheet.create({
    contant: {
      marginHorizontal: 20,
      flex: 1,
      marginVertical: 15,
    },
    screenContainer: {
      backgroundColor: themeColors.themeColor,
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <BeneficiariesHistoryTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default BeneficiariesHistory;
