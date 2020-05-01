import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return {errorMessage: '', token: action.payload};
    case 'add_error':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signup', payload: response.data.token});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
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
  {token: null, errorMessage: ''},
);
