import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const HomeSendMoney = () => {
  const img1 = require('../../assets/halaImg.png');
  const img2 = require('../../assets/aymanImg.png');

  const sendMoneyCards = [
    {name: 'Hala', id: '1', image: img1},
    {name: 'Ayman', id: '2', image: img2},
    {name: 'Alex', id: '3', image: img1},
    {name: 'Soha', id: '4', image: img2},
  ];

  return (
    <View style={styles.sendMoneyContainer}>
      <Text style={styles.title}>Send money</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sendMoneyCards}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.sendMoneyCard}>
            <Image source={item.image} style={styles.logoImage} />
            <Text>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sendMoneyCard: {
    height: 86,
    width: 78,
    backgroundColor: '#fff',
    borderRadius: 18,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  sendMoneyContainer: {
    marginVertical: 30,
  },
  logoImage: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeSendMoney;
