import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { Image, Text, View } from 'react-native';
import CustomButton from '../atoms/custombutton';
import { useThemeStyles } from '../shared/theme/ThemeStyles';
import getStyles from '../styles/MissionCompleteModelStyle';

const Tab = createMaterialBottomTabNavigator();

function MissionComplete({setModalVisible}) {
    const styles = useThemeStyles(getStyles);

  return (
    <View style={styles.modalView}>
    <Image
      source={require('../../assets/missioncomplete.png')}></Image>

    <Text style={styles.modalTitleText}>Mission Complete</Text>
    <Text style={styles.modalText}>
      Transfer to Jsmine Robert was successful
    </Text>
    <View style={styles.buttonConainer}>
      <CustomButton
        title={'Finish'}
        onPressButton={() => setModalVisible(false)}
      />
    </View>
  </View>
  );
}

export default MissionComplete;
