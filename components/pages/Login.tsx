import React from 'react';
import LoginTemplet from '../templets/logintemplet';
import {ImageBackground, SafeAreaView} from 'react-native';
import LoginFooter from '../molecules/LoginFooter/LoginFooter';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/LoginStyles';
function Login(): React.JSX.Element {
  const backgroundImage = '../../assets/loginbackground.png';
  const styles = useThemeStyles(getStyles);

  return (
    <ImageBackground source={require(backgroundImage)} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <LoginTemplet />
      </SafeAreaView>
      <LoginFooter />
    </ImageBackground>
  );
}
export default Login;
