import React, {useState, useContext} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {state, signin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.header}>
          Sign in
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
      {state.errorMessage ? (
        <Text style={styles.text}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Signin" onPress={() => signin({email, password})} />
      </Spacer>
      <Spacer>
        <Text style={styles.hint}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.hintButton}>Sign up</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  hint: {
    textAlign: 'center',
    fontSize: 18,
  },
  hintButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'blue',
  },
});
