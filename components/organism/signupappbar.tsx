import React from 'react';
import {Image, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/AppBarDefaultStyles';
const appLogoImage = '../../assets/app-icon.png';
const bankNameImage = '../../assets/bank-ahly.png';

const SignupAppBarOrganism = () => {
  const navigation = useNavigation();
  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.appBar}>
      <View style={styles.langContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require(bankNameImage)}
          style={styles.bankLogoImage}></Image>
        <View style={{width: 15}}></View>
        <Image source={require(appLogoImage)} style={styles.logoImage}></Image>
      </View>
    </View>
  );
};
export default SignupAppBarOrganism;
