import {
  USER_LOADED,
  USER_ERROR_MESSAGE_DB,
  NEW_CASH_BALANCE,
  LOGOUT,
} from "../actions/actionTypes";

const initialState = {
  username: localStorage.getItem("username"),
  cash: localStorage.getItem("cash_balance"),
  pic: localStorage.getItem("picture"),
  error_message: "",
  loggedIn: false,
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
        loggedIn: true,
      };
    case USER_ERROR_MESSAGE_DB:
      return {
        ...state,
        error_message: action.payload,
      };
    case NEW_CASH_BALANCE:
      localStorage.setItem("cash_balance", action.payload);
      return {
        ...state,
        cash: action.payload,
      };
    case LOGOUT:
      localStorage.clear();
      window.location.reload();
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
}
