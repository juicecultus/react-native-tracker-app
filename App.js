import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';

import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Context as AuthContext} from './src/context/AuthContext';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <AuthProvider value={AuthContext}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Resolve" component={ResolveAuthScreen} />
            <Stack.Screen
              name="SignIn"
              component={SigninScreen}
              listeners={{
                blur: e => {
                  e.clearErrorMessage;
                },
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignupScreen}
              listeners={{
                blur: e => {
                  e.clearErrorMessage;
                },
              }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
