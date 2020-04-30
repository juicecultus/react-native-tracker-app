import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TrackListScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Track List Screen</Text>
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
