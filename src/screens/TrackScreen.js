import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import TrackListScreen from './TrackListScreen';
import TrackDetailScreen from './TrackDetailScreen';

const Stack = createStackNavigator();

const TrackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

export default TrackScreen;

const styles = StyleSheet.create({});
