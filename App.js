import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView>
        <View>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}
