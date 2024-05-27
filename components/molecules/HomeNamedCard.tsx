import ShowCard from '../atoms/ShowCard';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useTheme } from '../shared/theme/ThemeContext';

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
  const {themeColors} = useTheme(); // Access the theme colors
  const styles = StyleSheet.create({
    textSty: {
      color:themeColors.darkBlue,
      fontSize: 16,
      fontWeight: '400',
    },
    contant: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <TouchableOpacity onPress={() => onPressButton()}>
      <View style={styles.contant}>
        <ShowCard backgrounC={backgrounC} cardImg={cardImg} />
        <Text style={styles.textSty}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeNamedCard;
