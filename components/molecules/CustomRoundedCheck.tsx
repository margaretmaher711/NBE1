import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';

interface Props {
  title: string;
  checked: boolean;
}

const CustomRoundedCheck: React.FC<Props> = ({title, checked}) => {
  return (
    <View style={styles.checkedItem}>
      <RoundCheckbox
        size={15}
        checked={checked}
        icon={null}
        // onValueChange={(newValue: any) => {
        //   console.log(newValue);
        // }}
        // style={styles.checkedVled}
        backgroundColor="#007236"
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    marginBottom: 6,
   color: themeColors.darkBlue,
    fontSize: 16,
    fontWeight: '400',
  },
  checkedItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default CustomRoundedCheck;
