import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from './AccountScreen';
import TrackCreateScreen from './TrackCreateScreen';
import TrackScreen from './TrackScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Track" component={TrackScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
