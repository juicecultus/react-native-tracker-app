import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';

const SignupScreen = ({navigation}) => {
  return (
    <>
      <Text style={styles.text}>Signup Screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home', {screen: 'Account'})}
      />
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: 'center',
  },
});
