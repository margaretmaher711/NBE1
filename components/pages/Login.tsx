import React from 'react';
import LoginTemplet from '../templets/logintemplet';
import {ImageBackground, SafeAreaView} from 'react-native';
import FooterOrganism from '../organism/footerorganism';
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
      <FooterOrganism />
    </ImageBackground>
  );
}
export default Login;
