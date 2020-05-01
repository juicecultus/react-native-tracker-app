import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Track Create Screen</Text>
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
