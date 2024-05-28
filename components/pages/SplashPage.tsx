import {SafeAreaView, View, Image} from 'react-native';

import { useThemeStyles } from '../shared/theme/ThemeStyles';
import getStyles from '../styles/SplashStyles';

function Splash(): React.JSX.Element {
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <Image
          source={require('../../assets/app-icon.png')}
          style={styles.logoImage}></Image>
        <Image
          source={require('../../assets/bank-ahly.png')}
          style={styles.bankImg}></Image>
      </View>
    </SafeAreaView>
  );
}

export default Splash;
// import React from 'react';
// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {useThemeCustome} from '../theme/ThemeContext';
// import SignupTemplet from '../templets/Signup';
// function Splash(): React.JSX.Element {
//   // const {themeColors} = useThemeCustome();
//   // const navigation = useNavigation();
//   const styles = StyleSheet.create({
//     contant: {
//       marginHorizontal: 20,
//       flex: 1,
//       marginVertical: 15,
//     },
//     screenContainer: {
//       // backgroundColor: themeColors.themeColor,
//       flex: 1,
//     },
//     bottomNavIcon: {
//       width: 25,
//       height: 25,
//       resizeMode: 'contain',
//     },
//   });
//   return (
//     <SafeAreaView style={styles.screenContainer}>
//       <View style={styles.contant}>
//         {/* <SignupTemplet navigation={navigation} /> */}
//       </View>
//     </SafeAreaView>
//   );
// }

// export default Splash;
