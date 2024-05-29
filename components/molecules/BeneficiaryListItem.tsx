import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useThemeCustome} from '../shared/theme/ThemeContext';

interface Props {
  item: any;
}
const phoneIcon = require('../../assets/callicon.png');
const dollarIcon = require('../../assets/dolarsign.png');

const BeneficiaryListItem: React.FC<Props> = ({item}) => {
  const {themeColors} = useThemeCustome();
  const styles = StyleSheet.create({
    greyText: {
      fontSize: 12,
      fontWeight: '400',
      color: '#B7B7B7',
      lineHeight: 16.41,
    },
    nameText: {
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 16.41,
      color: themeColors.darkBlue,
    },
    rowContainerData: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
    sendMoneyCardList: {
      elevation: 4,
      shadowRadius: 18,
      flexDirection: 'row',
      height: 86,
      backgroundColor: themeColors.nativThemeContainerBG,
      borderColor: themeColors.borderColor,
      borderWidth: 1,
      borderRadius: 18,
      padding: 15,
      alignItems: 'center',
    },
    logoListImage: {
      width: 60,
      height: 60,
      marginRight: 10,
      resizeMode: 'contain',
    },
  });
  return (
    <View style={styles.sendMoneyCardList}>
      <Image source={item.image} style={styles.logoListImage} />
      <View>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.rowContainerData}>
          <Image source={phoneIcon} />
          <Text style={styles.greyText}>{item.phoneNum}</Text>
        </View>
        <View style={styles.rowContainerData}>
          <Image source={dollarIcon} />
          <Text style={styles.greyText}>{item.amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default BeneficiaryListItem;
