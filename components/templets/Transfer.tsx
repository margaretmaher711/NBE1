import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';

import SignupAppBarOrganism from '../organism/signupappbar';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/TransferStyles';
import CardTitle from '../atoms/Text/Title/Title';
import TransferForm from '../organism/TransferForm';
import Title from '../atoms/Text/Title/Title';

function TransferTemplet({navigation}): React.JSX.Element {
  const styles = useThemeStyles(getStyles);
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.upperContainer}>
        <SignupAppBarOrganism />
        <Title title="Transfer" />
        <TransferForm navigation={navigation} />
      </View>
      <View style={{height: 90}}></View>
    </KeyboardAvoidingView>
  );
}

export default TransferTemplet;
