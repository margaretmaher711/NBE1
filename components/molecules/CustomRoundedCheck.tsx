import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import {useThemeCustome} from '../shared/theme/ThemeContext';

interface Props {
  title: string;
  checked: boolean;
}

const CustomRoundedCheck: React.FC<Props> = ({title, checked}) => {
  const {themeColors} = useThemeCustome();

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
  return (
    <View style={styles.checkedItem}>
      <RoundCheckbox
        size={15}
        checked={checked}
        icon={null}
        backgroundColor={themeColors.boxActiveColor}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CustomRoundedCheck;
