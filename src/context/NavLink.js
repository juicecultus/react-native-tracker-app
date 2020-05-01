import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Spacer from '../components/Spacer';
import * as RootNavigation from '../RootNavigation';

const NavLink = ({linkText, routeName}) => {
  return (
    <TouchableOpacity onPress={() => RootNavigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.redirect}>{linkText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
  redirect: {
    textAlign: 'center',
    fontSize: 18,
    color: 'blue',
  },
});
