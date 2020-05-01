import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';

const TrackDetailScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Track Detail Screen</Text>
    </SafeAreaView>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
