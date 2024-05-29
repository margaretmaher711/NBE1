import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CreditCardData from '../../atoms/CreditCardData';

interface Props {
  creditCardVal: string;
  dropZoneValues: any;
}

const CreditCardAirPayItem: React.FC<Props> = ({
  creditCardVal,
  dropZoneValues,
}) => {
  const creditCardBg = '../../../assets/creditCard.png';
  const visaIcon = '../../../assets/visaIcon.png';
  const cardnfc = '../../../assets/cardnfc.png';
  const cardnfc2 = '../../../assets/cardnfc2.png';

  // Create a ref to store the position of the card
  const position = useRef(new Animated.ValueXY()).current;

  // State to track if the card is being dragged
  const [dragging, setDragging] = useState(false);

  // Create a pan responder to handle touch events
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDragging(true);
        position.setOffset({
          x: position.x._value,
          y: position.y._value,
        });
        position.setValue({x: 0, y: 0});
      },
      onPanResponderMove: (e, gestureState) => {
        position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (e, gestureState) => {
        setDragging(false);
        position.flattenOffset();

        // Check if the card is dropped in the drop zone
        if (isDropZone(gestureState)) {
          console.log('Dropped in zone');
        } else {
          console.log('Not dropped in zone');
          Animated.spring(position, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const isDropZone = gesture => {
    const dz = dropZoneValues.current;
    if (!dz) {
      return false;
    }
    console.log('Drop Zone Values:', dz);
    console.log('Gesture Y:', gesture.moveY, 'Gesture X:', gesture.moveX);

    return (
      gesture.moveY > dz.y &&
      gesture.moveY < dz.y + dz.height &&
      gesture.moveX > dz.x &&
      gesture.moveX < dz.x + dz.width
    );
  };

  return (
    <View
      style={{
        flex: 1,
        zIndex: 2000, // Ensure the cards are above the drop zone
        backgroundColor: 'red',
      }}>
      <Animated.View
        style={[
          {
            transform: position.getTranslateTransform(),
            opacity: dragging ? 0.8 : 1,
            zIndex: dragging ? 2 : 1, // Ensure the dragged card is on top
          },
        ]}
        {...panResponder.panHandlers}>
        <ImageBackground
          source={require(creditCardBg)}
          imageStyle={{borderRadius: 10, resizeMode: 'cover'}}
          style={styles.creditCardBg}>
          <View style={styles.balnceFingerRowContainer}>
            <Text style={styles.creditCardValText}>{creditCardVal}</Text>
            <Image
              source={require(visaIcon)}
              style={styles.visaIconImg}></Image>
          </View>
          <View style={styles.creditNumRowContainer}>
            <Text style={styles.creditCardText}>**** **** **** 6506</Text>
            <View style={styles.cardnfcContainer}>
              <Image source={require(cardnfc)}></Image>
              <Image source={require(cardnfc2)}></Image>
            </View>
          </View>
          <View style={styles.creditdataContainer}>
            <CreditCardData
              title={'CARD HOLDER'}
              data={'AHMAD SAMI AL-SAYED'}
            />
            <CreditCardData title={'EXPIRES'} data={'08/25'} />
            <CreditCardData title={'CVV'} data={'352'} />
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  creditCardBg: {
    width: Dimensions.get('screen').width - 60,
    height: 196,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    padding: 25,
  },
  visaIconImg: {width: 52, height: 17},
  balnceFingerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditNumRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardnfcContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditdataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditCardValText: {
    color: '#ffff',
    fontSize: 25,

    fontFamily: 'GemunuLibre-Bold',
  },
  creditCardText: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'GemunuLibre-Regular',
  },
});
export default CreditCardAirPayItem;
