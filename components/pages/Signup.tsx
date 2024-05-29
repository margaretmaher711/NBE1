import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignupTemplet from '../templets/Signup';
import { useThemeStyles } from '../shared/theme/ThemeStyles';
import getStyles from '../styles/PageStyles';
function SignUp(): React.JSX.Element {
  const navigation = useNavigation();
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <SignupTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default SignUp;
