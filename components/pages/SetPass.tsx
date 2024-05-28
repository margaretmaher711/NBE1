import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SetPassTemplet from '../templets/SetPass';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/OtpStyles';

function SetPass(): React.JSX.Element {
  const navigation = useNavigation();

  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <SetPassTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default SetPass;
