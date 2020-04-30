import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
  return (
    <>
      <Spacer>
        <Text h3 style={styles.text}>
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Submit" />
      </Spacer>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
