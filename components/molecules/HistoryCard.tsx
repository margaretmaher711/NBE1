import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Divider} from '@rneui/base/dist/Divider/Divider';

interface Props {
  image: boolean;
  item: any;
}

const HistoryCard: React.FC<Props> = ({image, item}) => {
  return (
    <>
      <View style={styles.historyCard}>
        <View style={styles.iconNameContainer}>
          {image && <Image source={item.image}></Image>}
          <View>
            <Text style={styles.nametSty}>{item.name}</Text>
            <Text style={styles.dateSty}>{item.date}</Text>
          </View>
        </View>
        <Text style={styles.amountSty}>{item.amount}</Text>
      </View>
      <Divider />

      <View style={{width: 20}}></View>
    </>
  );
};
const styles = StyleSheet.create({
  historyCard: {
    flexDirection: 'row',
    height: 69,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconNameContainer: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    // justifyContent: 'space-between',
  },
  amountSty: {
    color: '#1C2437',
    fontSize: 18,
    fontWeight: '700',
  },
  dateSty: {
    color: '#B7B7B7',
    fontSize: 14,
    fontWeight: '400',
  },
  nametSty: {
    color: '#1C2437',
    fontSize: 18,
    fontWeight: '400',
  },
});
export default HistoryCard;
