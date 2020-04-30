import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <>
      <Text style={styles.text}>Track List Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
