import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useThemeStyles} from '../../shared/theme/ThemeStyles';
import getStyles from './Styles';

const Map = () => {
  const styles = useThemeStyles(getStyles);
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
  );
};

export default Map;
