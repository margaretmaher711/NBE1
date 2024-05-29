import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CardsTemplet from '../templets/Card';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/PageStyles';

function Cards({navigation}): React.JSX.Element {
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <CardsTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default Cards;
