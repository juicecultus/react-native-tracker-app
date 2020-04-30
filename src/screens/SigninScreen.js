import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SigninScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Signin Screen</Text>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
