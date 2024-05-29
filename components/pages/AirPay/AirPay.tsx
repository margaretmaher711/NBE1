import React from 'react';
import {SafeAreaView, View} from 'react-native';
import AirPayTemplet from '../../templets/AirPay';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from '../../styles/PageStyles';

function AirPay({navigation}): React.JSX.Element {
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <AirPayTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
export default AirPay;
