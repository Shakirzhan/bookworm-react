import api from '../api';
import { userLoggedIn, userLoggeIn } from './auth';

export const signup = data => dispatch => api.user.signup(data).then(user => dispatch(userLoggeIn(user)));