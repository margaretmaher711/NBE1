import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeNamedCard from '../../molecules/HomeNamedCard';
import {useThemeCustome} from '../../shared/theme/ThemeContext';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';
import {utilityImg, historyImg, cardImg, accountImg} from './Data';
const HomeCards = () => {
  const navigation = useNavigation();
  const styles = useThemeStyles(getStyles);

  const {themeColors} = useThemeCustome();
  return (
    <View style={styles.homeShowCards}>
      <HomeNamedCard
        backgrounC={themeColors.mintGreen}
        cardImg={accountImg}
        title={'Accounts'}
        onPressButton={() => null}
      />
      <HomeNamedCard
        backgrounC={themeColors.babyBlue}
        cardImg={cardImg}
        title={'Cards'}
        onPressButton={() => navigation.navigate('cards')}
      />
      <HomeNamedCard
        backgrounC={themeColors.lightOrange}
        cardImg={utilityImg}
        title={'Utilities'}
        onPressButton={() => null}
      />
      <HomeNamedCard
        backgrounC={themeColors.lightRed}
        cardImg={historyImg}
        title={'History'}
        onPressButton={() => null}
      />
    </View>
  );
};
export default HomeCards;
