import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WhiteFillFeild: React.FC<{
  prefixIcon: string;
  placeholder: string;
  validateInput: Function;
  text: string;
}> = ({placeholder, prefixIcon, text, validateInput}) => {
  console.log('prefixIcon', typeof prefixIcon);

  return (
    <View style={styles.inputPassContainer}>
      <Icon name={prefixIcon} size={24} style={styles.passPrefix} />

      <TextInput
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        placeholderTextColor="#007236"
        onChangeText={(e) => validateInput(e)}
        value={text}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputPassContainer: {
    height: 65,
    marginVertical: 15,
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#007236',
    backgroundColor: '#ffff',
    // marginHorizontal: 10,
    borderRadius: 10,
    color: '#000',
  },
  passPrefix: {
    marginHorizontal: 10,
  },
});
export default WhiteFillFeild;
