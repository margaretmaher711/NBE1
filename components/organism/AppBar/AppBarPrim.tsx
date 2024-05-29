import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

const AppBarPrim = ({navigation}) => {
  const userProf = require('../../../assets/userprof.png');
  const styles = useThemeStyles(getStyles);

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

export default AppBarPrim;
