import React, {useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
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
    <View style={{flex: 1, position: 'relative'}}>
      <View
        style={{
          flex: 1.5,
          paddingTop: 30,
        }}>
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
    zIndex: -1,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    borderWidth: 2,
    borderRadius: 27,
    borderColor: '#007236',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: 70,
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
});

export default AirPayTemplet;
