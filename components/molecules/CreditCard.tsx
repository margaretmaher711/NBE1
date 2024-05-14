import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CreditCardData from '../atoms/CreditCardData';

interface Props {
  creditCardVal: string;
}

const CreditCard: React.FC<Props> = ({creditCardVal}) => {
  const creditCardBg = '../../assets/creditCard.png';
  const visaIcon = '../../assets/visaIcon.png';
  const cardnfc = '../../assets/cardnfc.png';
  const cardnfc2 = '../../assets/cardnfc2.png';

  return (
    <View>
      <ImageBackground
        source={require(creditCardBg)}
        imageStyle={{borderRadius: 10, resizeMode: 'cover'}}
        style={styles.creditCardBg}>
        <View style={styles.balnceFingerRowContainer}>
          <Text style={styles.creditCardValText}>{creditCardVal}</Text>
          <Image source={require(visaIcon)} style={styles.visaIconImg}></Image>
        </View>
        <View style={styles.creditNumRowContainer}>
          <Text style={styles.creditCardText}>**** **** **** 6506</Text>
          <View style={styles.cardnfcContainer}>
            <Image source={require(cardnfc)}></Image>
            <Image source={require(cardnfc2)}></Image>
          </View>
        </View>
        <View style={styles.creditdataContainer}>
          <CreditCardData title={'CARD HOLDER'} data={'AHMAD SAMI AL-SAYED'} />
          <CreditCardData title={'EXPIRES'} data={'08/25'} />
          <CreditCardData title={'CVV'} data={'352'} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  creditCardBg: {
    width: Dimensions.get('screen').width - 60,
    height: 196,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    padding: 25,
  },
  visaIconImg: {width: 52, height: 17},
  balnceFingerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditNumRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardnfcContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditdataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditCardValText: {
    color: '#ffff',
    fontSize: 25,
    // fontWeight: 'Bold',
    // fontFamily: 'GemunuLibre-Regular',
    fontFamily: 'GemunuLibre-Bold',
  },
  creditCardText: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'GemunuLibre-Regular',

    // textAlign: 'center',
  },
});
export default CreditCard;
