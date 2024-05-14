import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const DarkFillFeild: React.FC<{
  prefixIcon: string;
  placeholder: string;
}> = ({placeholder, prefixIcon}) => {
  // console.log('prefixIcon', typeof prefixIcon);

  return (
<>
{/* <View style={styles.inputPassContainer}>
      <Image source={prefixIcon} style={styles.passPrefix}></Image>
      <TextInput
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        placeholderTextColor="#000"
      />
    </View> */}
    <View style={styles.inputUserNameContainer}>
    <Text style={styles.prefix}>{prefixIcon}</Text>
    <TextInput
      placeholder={placeholder}
      underlineColorAndroid="transparent"
      placeholderTextColor="#ffff"
      style={{
        color: '#fff',
      }}
    />
  </View> 
</>
  );
};
const styles = StyleSheet.create({
    inputUserNameContainer:  {
    height: 65,

    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ffff',
    // marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#00000fc0',
  },
  prefix: {
    paddingHorizontal: 15,
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',  },
});
export default DarkFillFeild;
