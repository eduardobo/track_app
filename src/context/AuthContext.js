import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error': {
      return { ...state, errorMessage: action.payload };
    }
    case 'store_token': {
      return { token: action.payload.token, message: action.payload.message, errorMessage: '' };
    }
    case 'clear_error_message': {
      return { ...state, errorMessage: '' };
    }
    case 'delete_token': {
      return { token: null, errorMessage: '', message: ''};
    }
    default: 
      return state;
  };
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if(token) {
    dispatch({ type: 'signin', payload: token})
    navigate('TrackList');
  }
  else {
    navigate('Signup');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
}

// const signup = (dispatch) => {
//   return async ({ email, password }) => {
//     // make api request to sign up with that email and password
//     try {
//       const response = await trackerApi.post('/signup', { email, password });

//       // if we sign up, modify our state, and say that we are authenticated
//       await AsyncStorage.setItem('token', response.data.token);
//       dispatch({ type: 'store_token', payload: response.data.token });
//     } catch(err) {
//       // if signing up fails, we probably need to reflect an error message somewhere
//       dispatch({ type: 'add_error',  payload: 'Something went wrong with sign up' });
//     }
//   };
// }

const signup = (dispatch) => async ({ email, password }) => {
  // make api request to sign up with that email and password
  try {
    const response = await trackerApi.post('/signup', { email, password });

    // if we sign up, modify our state, and say that we are authenticated
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'store_token', payload: {token: response.data.token, message: 'Account created successfuly'} });

    //navigate to main flow
    navigate('mainFlow');
  } catch(err) {
    // if signing up fails, we probably need to reflect an error message somewhere
    dispatch({ type: 'add_error',  payload: 'Something went wrong with sign up' });
  }
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      // try to sigin
      const response = await trackerApi.post('/signin', { email, password });
      // handle success by updating state
      await AsyncStorage.setItem('token', response.data.token);

      dispatch({ type: 'store_token', payload: { token: response.data.token, message: 'Signed in' } });

      navigate('trackListFlow');
    } catch (err) {
      // handle failure by showing error meesage (somehow)
      dispatch({ type: 'add_error', payload: 'Something went wrong when sign in' });
    }
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'delete_token' });
  navigate('loginFlow');
}

// const signout = (dispatch) => {
//   return async () => {
//     // try {
//       await AsyncStorage.removeItem('token');
//       dispatch({ type: 'delete_token' });
//       navigate('Signup');
//     // } catch (err) {

//     // } 
//   }
// };

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin, signout },
  { token: null, message: '', errorMessage: '' }
)