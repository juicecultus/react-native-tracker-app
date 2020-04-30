import createDataContext from './createDataContext';
import {Input} from 'react-native-elements';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    // make api request to sign up with email and password
    // if signed up, modify state to say we are authenticated
    // if fail, convey error message to user
  };
};

const signin = dispatch => {
  return ({email, password}) => {
    // try to sign in
    // handle success by undating state
    // if fail, convey error message to user
  };
};

const signout = dispatch => {
  return ({email, password}) => {
    // sign out
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout},
  {isSignedIn: false},
);
