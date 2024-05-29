import React, {useRef, useState} from 'react';
import {StyleSheet, PanResponder, Animated, View, Text} from 'react-native';
import AppBarPrim from '../organism/AppBar/AppBarPrim';
import CreditCardAirPayList from '../organism/AirPay/CreditCard/CreditCard';

const DragAndDropCard = () => {
  // Drop zone dimensions
  const dropZoneValues = useRef(null);

  const setDropZoneValues = event => {
    dropZoneValues.current = event.nativeEvent.layout;
    console.log('Drop Zone set:', dropZoneValues.current);
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <CreditCardAirPayList dropZoneValues={dropZoneValues} />
      </View>

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
      <AppBarPrim navigation={navigation} />
      <DragAndDropCard />
    </>
  );
}

const styles = StyleSheet.create({
  dropZone: {
    borderWidth: 2,
    borderRadius: 27,
    borderColor: '#007236',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderStyle: 'dashed',
    width: '100%',
    height: '33%',
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
