import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.text}>
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Spacer>
        <Button title="Submit" />
      </Spacer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});
