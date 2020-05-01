import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3 style={styles.header}>
          {headerText}
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({email, password})}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
  },
});
