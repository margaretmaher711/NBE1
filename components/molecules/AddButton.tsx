import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  textColor: string;
  backColor: string;
}

const AddButton: React.FC<Props> = ({
  textColor = '#007236',
  backColor = '#fff',
}) => {
  const styles = StyleSheet.create({
    addContiner: {
      elevation: 15,
      height: 30,
      width: 65,
      paddingHorizontal: 10,
      paddingVertical: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: backColor,
      textAlign: 'center',
      borderRadius: 15,
    },
  });
  const navigation = useNavigation();

  return (
   <TouchableOpacity onPress={() => navigation.navigate('addBeneficiaries')}>
     <View style={styles.addContiner}>
      <Icon name={'add-circle-outline'} size={20} color={textColor} />
      <Text style={{color: textColor}}>Add</Text>
    </View>
   </TouchableOpacity>
  );
};

export default AddButton;
