import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Track List Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </SafeAreaView>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
