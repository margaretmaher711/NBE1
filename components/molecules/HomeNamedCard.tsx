import ShowCard from '../atoms/ShowCard';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Cards from '../pages/CardS';
import FinishSignup from '../pages/FinishSignup';

interface Props {
  backgrounC: string;
  title: string;
  cardImg: any;
}

const HomeNamedCard: React.FC<Props> = ({
  backgrounC = '#00C974',
  cardImg,
  title,
}) => {
  const navigation = useNavigation();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('login')}>
      <View style={styles.contant}>
        <ShowCard backgrounC={backgrounC} cardImg={cardImg} />
        <Text style={styles.textSty}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textSty: {
    color: '#1C2437',
    fontSize: 16,
    fontWeight: '400',
  },
  contant: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeNamedCard;
