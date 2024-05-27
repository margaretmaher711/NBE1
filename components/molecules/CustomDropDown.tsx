import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTheme} from '../shared/theme/ThemeContext';

interface Props {
  title: string;
  openType: any;
  valueType: any;
  itemsType: any;
  setOpenType: any;
  setValueType: any;
  setItemsType: any;
  zIndex: any;
}

const DropDown: React.FC<Props> = ({
  title,
  openType,
  valueType,
  itemsType,
  setOpenType,
  setValueType,
  setItemsType,
  zIndex = 3000,
}) => {
  const {themeColors} = useTheme();

  const styles = StyleSheet.create({
    dropdownContainer: {
      gap: 5,
      backgroundColor: themeColors.themeColor,
      borderWidth: 0,

      elevation: 0,
    },
    dropdown: {
      backgroundColor: themeColors.themeColor,
      borderWidth: 0,
    },
    dropdownLabel: {
      paddingHorizontal: 13,

      fontWeight: '700',
      fontSize: 14,
      color: themeColors.darkBlue,
    },
    containerStyle: {
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      borderColor: themeColors.borderColor,
      elevation: 4,
      marginBottom: 10,
      backgroundColor: themeColors.themeColor,
      zIndex: zIndex,
    },
    itemLabel: {
      color: themeColors.darkBlue, // Color for item labels
      // backgroundColor:themeColors.nativThemeContainerBG,
    },
  });
  return (
    <View style={styles.containerStyle}>
      <View style={[styles.dropdownContainer]}>
        <Text style={styles.dropdownLabel}>{title}</Text>
        <DropDownPicker
          open={openType}
          value={valueType}
          items={itemsType}
          setOpen={setOpenType}
          setValue={setValueType}
          setItems={setItemsType}
          style={styles.dropdown}
          textStyle={styles.itemLabel}
          listItemLabelStyle={{color: '#000'}}
        />
      </View>
    </View>
  );
};

export default DropDown;
