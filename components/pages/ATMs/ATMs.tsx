import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Map from '../../organism/ATMs/Map';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';
import AppBarPrim from '../../organism/AppBar/AppBarPrim';

function ATMs({navigation}) {
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.container}>
      <Map />
      <View style={styles.appBarContainer}>
        <AppBarPrim navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default ATMs;
