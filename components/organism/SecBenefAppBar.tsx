import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity} from 'react-native';
import AddButton from '../molecules/AddButton';
import { useTheme } from '../theme/ThemeContext';

const SecBenefAppBar = ({isGrid, setGrid}) => {
  const {themeColors}=useTheme();
  const styles = StyleSheet.create({
  sendMonyContainer: {
    marginVertical: 30,
  },

  homeTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  title: {
   color: themeColors.darkBlue,
    fontWeight: '700',
    fontSize: 20,
  },
  viewContainer: {
    elevation: 15,
    paddingHorizontal: 10,

    paddingVertical: 2,
    width: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 15,
  },
  content: {
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  greenContainer: {
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007236',
  },
});  return (
    <View style={styles.homeTitles}>
      <Text style={styles.title}>Beneficiaries</Text>
      <View style={styles.content}>
        <View style={styles.viewContainer}>
          <View style={isGrid && styles.greenContainer}>
            <TouchableOpacity onPress={() => setGrid(true)}>
              <Icon
                name={'grid'}
                size={18}
                color={isGrid ? '#fff' : '#B7B7B7'}
              />
            </TouchableOpacity>
          </View>
          <View style={!isGrid && styles.greenContainer}>
            <TouchableOpacity onPress={() => setGrid(false)}>
              <Icon
                name={'list'}
                size={18}
                color={!isGrid ? '#fff' : '#B7B7B7'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <AddButton />
      </View>
    </View>
  );
};

export default SecBenefAppBar;
