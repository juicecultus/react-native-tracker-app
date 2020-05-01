import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import * as RootNavigation from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return {errorMessage: '', userToken: action.payload};
    case 'restore_token':
      return {
        ...state,
        userToken: action.payload,
        isLoading: false,
      };
    case 'sign_in':
      return {
        ...state,
        isSignout: false,
        userToken: action.payload,
      };
    case 'sign_out':
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
    case 'add_error':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    await AsyncStorage.setItem('userToken', response.data.token);
    dispatch({type: 'signup', payload: response.data.token});
    RootNavigation.navigate('Home');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
};

const bootstrapAsync = dispatch => async () => {
  let userToken;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    dispatch({type: 'restore_token', payload: userToken});
  } catch (err) {
    console.log(err.message);
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
  return () => dispatch({type: 'sign_out'});
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout, bootstrapAsync},
  {
    token: null,
    errorMessage: '',
    userToken: null,
    isSignout: false,
    isLoading: true,
  },
);
