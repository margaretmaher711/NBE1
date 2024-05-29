import React from 'react';
import {SafeAreaView, View} from 'react-native';

import BeneficiariesTemplet from '../templets/Beneficiaries';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/PageStyles';

function Beneficiaries({navigation}): React.JSX.Element {
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <BeneficiariesTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default Beneficiaries;
