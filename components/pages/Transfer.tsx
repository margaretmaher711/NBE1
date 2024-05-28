import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import getStyles from '../styles/TransferStyles';
import { useThemeStyles } from '../shared/theme/ThemeStyles';
import TransferTemplet from '../templets/Transfer';

function Transfer() {
  const navigation = useNavigation();

  const styles = useThemeStyles(getStyles);

  
 

  return (
    <SafeAreaView style={styles.container}>
     <TransferTemplet navigation={navigation}/>
    </SafeAreaView>
  );
}

export default Transfer;
