import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../shared/theme/ThemeContext';

const HomeAppBar = ({navigation, backgroundColor = 'transparent'}) => {
  const userProf = require('../../assets/userprof.png');
  const {themeColors} = useTheme(); // Access the theme colors

  const styles = StyleSheet.create({
    contant: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: backgroundColor,
    },
    userProf: {
      width: 45,
      height: 45,
      borderRadius: 10,
    },
    menuStyle: {
      color: themeColors.textColor,
    },
    menuContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 45,
      flex: 0.6,
    },
    bellContainer: {
      backgroundColor: themeColors.nativThemeContainerBG,
      borderRadius: 10,
      padding: 10,
      width: 45,
      height: 45,
      elevation: 4,
    },
    goodMorningMsg: {
      color: themeColors.textColor,
      fontWeight: '400',
      fontSize: 14,
    },
    userNameMsg: {
      color: themeColors.textColor,
      fontWeight: '700',
      fontSize: 14,
    },
  });
  return (
    <View style={styles.contant}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name={'menu'} size={33} style={styles.menuStyle} />
        </TouchableOpacity>
        <Image source={userProf} style={styles.userProf}></Image>
        <View>
          <Text style={styles.goodMorningMsg}>Good Morning</Text>
          <Text style={styles.userNameMsg}>Ahmed</Text>
        </View>
      </View>
      <View style={styles.bellContainer}>
        <Icon
          name={'notifications-outline'}
          size={25}
          style={styles.menuStyle}
        />
      </View>
    </View>
  );
};

export default HomeAppBar;
