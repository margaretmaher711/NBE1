import React from 'react';
import {SafeAreaView, View} from 'react-native';

import BeneficiariesHistoryTemplet from '../templets/BeneficiariesHistory';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/PageStyles';

function BeneficiariesHistory({navigation}): React.JSX.Element {
  const styles = useThemeStyles(getStyles);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <BeneficiariesHistoryTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default BeneficiariesHistory;
