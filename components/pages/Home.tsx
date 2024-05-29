import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeTemplet from '../templets/Home';
import {useThemeStyles} from '../shared/theme/ThemeStyles';
import getStyles from '../styles/PageStyles';

function Home({navigation}): React.JSX.Element {
  const styles = useThemeStyles(getStyles);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contant}>
        <HomeTemplet navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default Home;
