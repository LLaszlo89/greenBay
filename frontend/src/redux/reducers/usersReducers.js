<<<<<<< HEAD
 import { LOGIN_SUCCESS , LOGIN_USER , USER_LOADED } from '../actions/actionTypes'
 const initialState = {
  username: "",
  cash:null,
  pic:""
=======
import { USER_LOADED , ERROR_MESSAGE_DB } from "../actions/actionTypes";

const initialState = {
  username: localStorage.getItem('username') ,
  cash: localStorage.getItem('cash_balance'),
  pic: localStorage.getItem('picture'),
  error_message:""
>>>>>>> new
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    case USER_LOADED:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("cash_balance", action.payload.cash_balance);
      localStorage.setItem("picture", action.payload.picture);
      localStorage.setItem("username", action.payload.name);
      return {
        ...state,
        username: action.payload.name,
        cash: action.payload.cash_balance,
        pic: action.payload.picture,
      };
<<<<<<< HEAD

     case USER_LOADED:
       console.log("This is the action in the user red" , action.payload )
      return {
        ...state,
      };  

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', action.payload.user);
      localStorage.setItem('cash_balance', action.payload.cash_balance);
=======
    case ERROR_MESSAGE_DB:
      console.log(action.type,"**********************--")
>>>>>>> new
      return {
        ...state,
        error_message: action.payload
      };

    default:
      return state;
  }
}
