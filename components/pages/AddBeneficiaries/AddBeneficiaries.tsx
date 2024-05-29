import React from 'react';
import {SafeAreaView, View} from 'react-native';

import AddBeneficiariesTemplet from '../../templets/Beneficiaries/AddBeneficiariesTemp/AddBeneficiaries';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

function AddBeneficiaries({navigation}): React.JSX.Element {
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <AddBeneficiariesTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default AddBeneficiaries;
