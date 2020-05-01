import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import * as RootNavigation from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'signout':
      return {...state, token: null};
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};

const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
    RootNavigation.navigate('Home');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
};

// const bootstrapAsync = dispatch => async () => {
//   let userToken;
//   try {
//     userToken = await AsyncStorage.getItem('userToken');
//     dispatch({type: 'restore_token', payload: userToken});
//   } catch (err) {
//     console.log(err.message);
//   }
// };

const signin = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
    RootNavigation.navigate('Home');
  } catch (error) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signout = dispatch => {
  // return () => dispatch({type: 'sign_out'});
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout, clearErrorMessage},
  {
    token: null,
    errorMessage: '',
  },
);
