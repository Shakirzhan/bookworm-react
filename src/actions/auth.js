import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggeIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggeOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch => 
api.user.login(credentials)
.then(user => {
  localStorage.bookwormJWT = user.token;
  dispatch(userLoggeIn(user));
});

export const logout = () => dispatch => {
  localStorage.removeItem('bookwormJWT');
  dispatch(userLoggeOut());
};