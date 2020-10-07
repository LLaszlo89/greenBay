 import {LOGIN_SUCCESS , LOGIN_USER } from '../actions/actionTypes'
 const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: localStorage.getItem('user'),

};

export default function (state = initialState, action) {
  switch (action.type) {
     case LOGIN_USER:
      return {
        ...state,
        isLoading: true,
      };

/*     case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };  */

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', action.payload.user);
      localStorage.setItem('cash_balance', action.payload.cash_balance);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
/* 
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('admin');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        isAdmin: false,
        user: null,
      };
 */
    default:
      return state;
  }
}
 
