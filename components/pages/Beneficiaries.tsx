import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import BeneficiariesTemplet from '../templets/Beneficiaries';
import {useTheme} from '../shared/theme/ThemeContext';

function Beneficiaries({navigation}): React.JSX.Element {
  const {themeColors} = useTheme();

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
        <BeneficiariesTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default Beneficiaries;
