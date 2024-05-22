import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import CardsTemplet from '../templets/Card';
import {useTheme} from '../theme/ThemeContext';

function Cards({navigation}): React.JSX.Element {
  const {themeColors} = useTheme();
  const styles = StyleSheet.create({
    contant: {
      marginHorizontal: 20,
      flex: 1,
      marginVertical: 15,
    },
    screenContainer: {
      backgroundColor: themeColors.themeColor,
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <CardsTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default Cards;
