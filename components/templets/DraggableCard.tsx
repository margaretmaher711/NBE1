// import React, {useRef, useState} from 'react';
// import {Animated, PanResponder, StyleSheet} from 'react-native';
// import CreditCardItem from '../molecules/CreditCardItem';

// const DraggableCardItem = ({creditCardVal, dropZoneValues}) => {
//   const position = useRef(new Animated.ValueXY()).current;
//   const [dragging, setDragging] = useState(false);

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         setDragging(true);
//         position.setOffset({
//           x: position.x._value,
//           y: position.y._value,
//         });
//         position.setValue({x: 0, y: 0});
//       },
//       onPanResponderMove: (e, gestureState) => {
//         position.setValue({x: gestureState.dx, y: gestureState.dy});
//       },
//       onPanResponderRelease: (e, gestureState) => {
//         setDragging(false);
//         position.flattenOffset();

//         // Check if the card is dropped in the drop zone
//         if (isDropZone(gestureState)) {
//           console.log('Dropped in zone');
//         } else {
//           console.log('Not dropped in zone');
//           Animated.spring(position, {
//             toValue: {x: 0, y: 0},
//             useNativeDriver: false,
//           }).start();
//         }
//       },
//     })
//   ).current;

//   const isDropZone = gesture => {
//     const dz = dropZoneValues.current;
//     if (!dz) {
//       return false;
//     }

//     return (
//       gesture.moveY > dz.y &&
//       gesture.moveY < dz.y + dz.height &&
//       gesture.moveX > dz.x &&
//       gesture.moveX < dz.x + dz.width
//     );
//   };

//   return (
//     <Animated.View
//       style={[
//         styles.card,
//         {
//           transform: position.getTranslateTransform(),
//           opacity: dragging ? 0.8 : 1,
//           zIndex: dragging ? 2 : 1,
//         },
//       ]}
//       {...panResponder.panHandlers}>
//       <CreditCardItem creditCardVal={creditCardVal} />
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'transparent',
//     shadowColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // width: 150,
//     // height: 200,
//     // margin: 10,
//   },
// });

// export default DraggableCardItem;
