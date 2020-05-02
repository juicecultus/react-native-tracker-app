// import '../_mockLocation';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {Context as LocationContext} from '../context/LocationContext';

import Map from '../components/Map';
import Spacer from '../components/Spacer';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err] = useLocation(addLocation);

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
