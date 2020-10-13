 import { LOGIN_SUCCESS , LOGIN_USER , USER_LOADED } from '../actions/actionTypes'
 const initialState = {
  username: "",
  cash:null,
  pic:""
};

export default function (state = initialState, action) {
  switch (action.type) {
     case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
      };

     case USER_LOADED:
       console.log("This is the action in the user red" , action.payload )
      return {
        ...state,
      };  

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', action.payload.user);
      localStorage.setItem('cash_balance', action.payload.cash_balance);
      return {
        ...state,
        ...action.payload,
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
 
