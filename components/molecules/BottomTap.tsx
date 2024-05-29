import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface Props {
  unFocusedImg: any;
  focusedImg: any;
  focused: boolean;
}

const BottomTab: React.FC<Props> = ({
  unFocusedImg,
  focusedImg,
  focused = false,
}) => {
  //   const {themeColors} = useThemeCustome();
  const styles = StyleSheet.create({
    bottomNavIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    focusedTab: {
      backgroundColor: '#007236',
      borderRadius: 16,
      width: 65,
      height: 65,
      alignItems: 'center',
      paddingTop: 7,
      marginBottom: 15,
    },
  });
  return focused ? (
    <View style={styles.focusedTab}>
      <Image source={focusedImg} style={styles.bottomNavIcon} />
    </View>
  ) : (
    <Image source={unFocusedImg} style={styles.bottomNavIcon} />
  );
};

export default BottomTab;
