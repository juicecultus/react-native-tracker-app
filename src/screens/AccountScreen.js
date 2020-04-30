import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AccountScreen = () => {
  return (
    <>
      <Text style={styles.text}>Account Screen</Text>
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
