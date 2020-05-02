import '../_mockLocation';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {requestPermissionsAsync} from 'expo-location';

import Map from '../components/Map';
import Spacer from '../components/Spacer';

const TrackCreateScreen = () => {
  const [err, seterr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
    } catch (e) {
      seterr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h3 style={styles.header}>
        Create a Track
      </Text>
      <Spacer />
      <Map />
      {err ? <Text h5>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
  },
});
