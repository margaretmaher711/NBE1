import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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
  return (
    <View style={[styles.dropdownContainer, {zIndex: zIndex}]}>
      <Text style={styles.dropdownLabel}>{title}</Text>
      <DropDownPicker
        open={openType}
        value={valueType}
        items={itemsType}
        setOpen={setOpenType}
        setValue={setValueType}
        setItems={setItemsType}
        style={styles.dropdown}
        dropDownStyle={styles.dropdown}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dropdownContainer: {
    height: 40,
    marginBottom: 70,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 4,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  dropdownLabel: {
    paddingHorizontal: 13,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 14,
    color: '#1C2437',
  },
});
export default DropDown;
