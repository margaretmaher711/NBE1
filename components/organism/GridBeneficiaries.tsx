import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useThemeCustome} from '../shared/theme/ThemeContext';

const GridBeneficiaries = ({sendMoneyCards}) => {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 4; // Number of columns you want in the grid
  const itemWidth = screenWidth / numColumns - 17; // Calculate item width dynamically with some margin

  const navigation = useNavigation();
  const {themeColors} = useThemeCustome();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sendMoneyCard: {
      height: 82,
      width: itemWidth,
      backgroundColor: themeColors.nativThemeContainerBG,
      borderRadius: 18,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 3,
    },
    logoImage: {
      width: '100%',
      height: itemWidth - 40,
      resizeMode: 'contain',
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
    },
    nametSty: {
      color: themeColors.textColor,
      fontSize: 14,
      fontWeight: '400',
      textAlign: 'center',
      paddingTop: 5,
    },
  });
  return (
    <FlatList
      key="grid" // Unique key for grid view
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      data={sendMoneyCards}
      renderItem={itemData => {
        return (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('beneficiariesHistory', itemData.item)
              }>
              <View style={styles.sendMoneyCard}>
                <Image source={itemData.item.image} style={styles.logoImage} />
                <Text style={styles.nametSty}>{itemData.item.name}</Text>
              </View>
            </TouchableOpacity>
            <View style={{width: 10}}></View>
          </>
        );
      }}
      numColumns={numColumns}
      keyExtractor={(item, index) => index.toString()}
      alwaysBounceVertical={false}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
    />
  );
};

export default GridBeneficiaries;
