import React from 'react';
import {ImageBackground, View} from 'react-native';
import FinishSignupTemplet from '../../templets/FinishSignup';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';
function FinishSignup(): React.JSX.Element {
  const backgroundImage = '../../../assets/finishsignup.png';
  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.contant}>
      <ImageBackground source={require(backgroundImage)} style={styles.image}>
        <FinishSignupTemplet />
      </ImageBackground>
    </View>
  );
}
export default FinishSignup;
