import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import HomeTitle from '../../molecules/TitleViewAll/TitleViewAll';
import {sendMoneyCards} from './Data';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';
const HomeSendMoney = () => {
  const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.sendMoneyContainer}>
      <HomeTitle title={'Send money'} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sendMoneyCards}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.sendMoneyCard}>
            <Image source={item.image} style={styles.logoImage} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default HomeSendMoney;
