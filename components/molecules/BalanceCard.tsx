import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';

interface Props {
  balanceVal: string;
}

const BalanceCard: React.FC<Props> = ({balanceVal}) => {
  const balanceBg = '../../assets/balanceBg.png';
  const fingerPrint = '../../assets/finger-print.png';

  return (
    <View>
      <ImageBackground source={require(balanceBg)} style={styles.balanceBg}>
        <View style={styles.balnceFingerRowContainer}>
          <Text style={styles.balanceText}>Balance</Text>
          <Image
            source={require(fingerPrint)}
            style={styles.fingerPrintImg}></Image>
        </View>
        <Text style={styles.balanceValText}>{balanceVal}</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  balanceBg: {
    width: Dimensions.get('screen').width - 40,
    height: 132,
    borderRadius: 10,
    resizeMode: 'cover',
    marginVertical: 35,
  },
  // balanceBgContainer: {flex: 2},
  fingerPrintImg: {width: 30, height: 30},
  balnceFingerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
  },
  balanceText: {color: '#ffff', fontSize: 16, fontWeight: '400'},
  balanceValText: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
});
export default BalanceCard;
