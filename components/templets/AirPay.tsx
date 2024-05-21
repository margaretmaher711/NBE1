import React, {useRef, useState} from 'react';
import {StyleSheet, PanResponder, Animated, View, Text} from 'react-native';
import HomeAppBar from '../organism/HomeAppBar';
import CreditCardItem from '../molecules/CreditCardItem';

const DragAndDropCard = () => {
  // Create a ref to store the position of the card
  const position = useRef(new Animated.ValueXY()).current;

  // State to track if the card is being dragged
  const [dragging, setDragging] = useState(false);

  // Drop zone dimensions
  const dropZoneValues = useRef(null);

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

  const setDropZoneValues = event => {
    dropZoneValues.current = event.nativeEvent.layout;
    console.log('Drop Zone set:', dropZoneValues.current);
  };

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          styles.card,
          {
            transform: position.getTranslateTransform(),
            opacity: dragging ? 0.8 : 1,
            zIndex: dragging ? 2 : 1, // Ensure the dragged card is on top
          },
        ]}
        {...panResponder.panHandlers}>
        <CreditCardItem creditCardVal={'124574.5'} />
      </Animated.View>

      <View onLayout={setDropZoneValues} style={styles.dropZone}>
        <Text style={styles.dropZoneText}>
          Touch & hold a card then drag it to this box
        </Text>
      </View>
    </View>
  );
};

function AirPayTemplet({navigation}) {
  return (
    <>
      <HomeAppBar navigation={navigation} />
      <DragAndDropCard />
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    zIndex: 2, // Ensure the cards are above the drop zone
  },
  card: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Adjust width as needed
    height: '50%', // Adjust height as needed
  },
  dropZone: {
    // height: 300,
    borderWidth: 2,
    borderRadius: 27,
    borderColor: '#007236',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderStyle: 'dashed',
    width: '100%', // Adjust width as needed
    height: '35%', // Adjust height as needed
  },
  dropZoneText: {
    color: '#007236',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 14,
  },
  container: {
    marginHorizontal: 16,
    marginTop: 15,
    flex: 1,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  upperCont: {flex: 5},
  lowerCont: {
    flexDirection: 'row',
    flex: 0.5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default AirPayTemplet;
