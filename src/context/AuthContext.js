import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return { errorMessage: '', token: action.payload }
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password}) => {
      try {
          const response = await trackerApi.post('./signup', { email, password})
          await AsyncStorage.setItem('token', response.data.token);
          dispatch({ type: 'signup' , payload: response.data.token});
          navigate('TrackList');
        }
      catch(err) {
            dispatch ({ type: 'add_error', payload: 'Something went Wrong with Signup'})
      }
    };
};

const signin = dispatch => {
    return ({ email, password}) => {
        // try to sigin 
        // handle state success
        //handle failure
    };
};

const signout = dispatch => {
    return () => {
       // somehow signout
    };
};


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout},
    { token: null , errorMessage: ''}
);