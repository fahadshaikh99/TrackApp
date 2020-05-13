import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }

        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password}) => {
      try {
          const response = await trackerApi.post('./signup', { email, password})
          console.log(response);
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
    { isSignedIn: false, errorMessage: ''}
);