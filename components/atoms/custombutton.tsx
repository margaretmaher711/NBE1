import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
interface Props {
  title: string;
  onPressButton: Function | any;
  buttonColor: string;
  textColor: string;
  opacity:any
}

const CustomButton: React.FC<Props> = ({
  title,
  onPressButton,
  buttonColor = '#007236',
  textColor = '#ffff',
  opacity=1
}) => {
  const styles = StyleSheet.create({
    appButtonContainer: {
      backgroundColor: buttonColor,
      opacity: opacity,
      borderRadius: 12.5,
      // marginRight: 35,
      justifyContent: 'center',
      alignItems: 'center',
      height: 55,
      flex: 1,
    },
    loginText: {
      color: textColor,
      fontSize: 17,
      fontWeight: 'bold',
    },
  });
  return (
    <TouchableOpacity
      style={[styles.appButtonContainer]}
      onPress={() => onPressButton()}>
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
