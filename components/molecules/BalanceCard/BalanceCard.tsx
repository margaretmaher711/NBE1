import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';
import {balanceBg, fingerPrint} from './Data';
interface Props {
  balanceVal: string;
}

const BalanceCard: React.FC<Props> = ({balanceVal}) => {
  const styles = useThemeStyles(getStyles);

  return (
    <View>
      <ImageBackground
        source={balanceBg}
        style={styles.balanceBg}
        borderRadius={20}>
        <View style={styles.balnceFingerRowContainer}>
          <Text style={styles.balanceText}>Balance</Text>
          <Image source={fingerPrint} style={styles.fingerPrintImg}></Image>
        </View>
        <Text style={styles.balanceValText}>{balanceVal}</Text>
      </ImageBackground>
    </View>
  );
};
export default BalanceCard;
