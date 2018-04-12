import storage from 'redux-persist/lib/storage';
import { persistReducer, REHYDRATE } from 'redux-persist';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  REGISTER_NO,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  regno: '',
  name: '',
  currentUser: null,
  loggedin: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case REGISTER_NO:
      return { ...state, regno: action.payload };

    case LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        regno: '',
        name: '',
        loggedin: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        regno: '',
        name: '',
        loggedin: true,
      };
    case REHYDRATE:
      return {
        ...state,
        email: state.email,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'auth',
  storage,
};

export default persistReducer(persistConfig, AuthReducer);
