import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeAppBar from '../../organism/HomeAppBar';
import Map from '../../organism/ATMs/Map';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

function ATMs({navigation}) {
  const styles = useThemeStyles(getStyles);

  return (
    <SafeAreaView style={styles.container}>
      <Map />
      <View style={styles.appBarContainer}>
        <HomeAppBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default ATMs;
