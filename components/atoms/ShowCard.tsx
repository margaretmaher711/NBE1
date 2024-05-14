import React from 'react';
import {ColorValue, Image} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
interface Props {
  backgrounC: string;
  cardImg: any;
}
const ShowCard: React.FC<Props> = ({backgrounC = '#00C974', cardImg}) => {
  const styles = StyleSheet.create({
    showCard: {
      width: 60,
      height: 60,
      backgroundColor: backgrounC,
      borderRadius: 13,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardImgSty: {
      width: 35,
      height: 27,
      resizeMode: 'contain',
    },
  });

  return (
    <View style={styles.showCard}>
      <Image source={cardImg} style={styles.cardImgSty}></Image>
    </View>
  );
};

export default ShowCard;
