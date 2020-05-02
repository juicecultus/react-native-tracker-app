import React, {useContext} from 'react';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
  const {
    state: {currentLocation},
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // add region if you want map to move with the tracker
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
