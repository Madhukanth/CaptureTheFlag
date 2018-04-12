import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  REGISTER_NO,
} from './types'; 

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const nameChanged = text => ({
  type: NAME_CHANGED,
  payload: text,
});

export const registerNoChanged = text => ({
  type: REGISTER_NO,
  payload: text,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});
