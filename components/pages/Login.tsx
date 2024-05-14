import React from 'react';
import LoginTemplet from '../templets/logintemplet';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import FooterOrganism from '../organism/footerorganism';
function Login(): React.JSX.Element {
  const backgroundImage = '../../assets/loginbackground.png';

  return (
    <>
      <ImageBackground source={require(backgroundImage)} style={styles.image}>
        <LoginTemplet />
        <FooterOrganism />

      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  
    image: {
      height: Dimensions.get('screen').height,
      flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover', // or 'stretch'
    },
  });
export default Login;
