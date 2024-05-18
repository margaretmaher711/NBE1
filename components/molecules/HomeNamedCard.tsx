import ShowCard from '../atoms/ShowCard';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  backgrounC: string;
  title: string;
  cardImg: any;
  onPressButton: Function | any;

}

const HomeNamedCard: React.FC<Props> = ({
  backgrounC = '#00C974',
  cardImg,
  title,
  onPressButton
}) => {

  return (
    <TouchableOpacity onPress={() => onPressButton()}>
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
