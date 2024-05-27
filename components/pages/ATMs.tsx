import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import HomeAppBar from '../organism/HomeAppBar';

function ATMs({navigation}) {
  const markers = [
    {
      latitude: 37.788,
      longitude: -122.431,
      title: 'Foo Place',
      description: '1234 Foo Drive',
    },
    {
      latitude: 37.78825,
      longitude: -122.4324,
      title: 'Foo2 Place',
      description: '1234 Foo2 Drive',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      <View style={styles.appBarContainer}>
        <HomeAppBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  appBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  contant: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: 'transparent',
  },
});

export default ATMs;
