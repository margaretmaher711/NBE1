import {Dimensions, SafeAreaView, StyleSheet, View, Image} from 'react-native';

import {useTheme} from '../theme/ThemeContext';

function Splash(): React.JSX.Element {
  const {themeColors} = useTheme(); // Access the theme colors

  const styles = StyleSheet.create({
    contant: {
      marginTop: Dimensions.get('screen').height / 3,

      flex: 1,
      marginBottom: 15,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    screenContainer: {
      backgroundColor: themeColors.themeColor,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoImage: {
      width: 110,
      height: 130,
    },
    bankImg: {
      width: 130,
      height: 40,
    },
  });
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
// import {useTheme} from '../theme/ThemeContext';
// import SignupTemplet from '../templets/Signup';
// function Splash(): React.JSX.Element {
//   // const {themeColors} = useTheme();
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
