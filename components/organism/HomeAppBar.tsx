import React from 'react';
import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeAppBar = () => {
  const userProf = '../../assets/userprof.png';

  return (
    <View style={styles.contant}>
      <View style={styles.menuContainer}>
        <TouchableOpacity >
          <Icon name={'menu'} size={33} style={styles.menuStyle} />
        </TouchableOpacity>
        <Image source={require(userProf)} style={styles.userProf}></Image>
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
const styles = StyleSheet.create({
  contant: {flexDirection: 'row', justifyContent: 'space-between'},
  userProf: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  menuStyle: {
    color: '#000',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    flex: 0.6,
  },
  bellContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 45,
    height: 45,
    elevation: 5,
  },
  goodMorningMsg: {
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
  },
  userNameMsg: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14,
  },
});
export default HomeAppBar;
