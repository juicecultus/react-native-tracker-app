import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';

const SigninScreen = ({navigation}) => {
  return (
    <>
      <Text style={styles.text}>Signin Screen</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('SignUp')}
      />
    </>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: 'center',
  },
});
