import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import CustomButton from '../atoms/custombutton';
import {Text} from '@rneui/base';
import FinishSignupAppBar from '../molecules/FinishSignup';
import FinishSignupTemplet from '../templets/FinishSignup';
function FinishSignup(): React.JSX.Element {
  const backgroundImage = '../../assets/finishsignup.png';

  return (
    <View style={styles.contant}>
      <ImageBackground source={require(backgroundImage)} style={styles.image}>
        <FinishSignupTemplet />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  contant: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('screen').height,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover', // or 'stretch'
  },
 

});
export default FinishSignup;
