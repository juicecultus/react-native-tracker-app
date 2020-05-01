import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text h3 style={styles.text}>
        Account Screen
      </Text>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  text: {
    textAlign: 'center',
  },
});
