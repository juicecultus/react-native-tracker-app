import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../context/NavLink';

const SigninScreen = ({navigation}) => {
  const {state, signin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Submit"
        onSubmit={signin}
      />
      <NavLink
        routeName="SignUp"
        linkText="Don't have an account? Sign up now"
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});
