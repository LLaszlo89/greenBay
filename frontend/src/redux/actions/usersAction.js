import { USER_LOADED } from "./actionTypes";
<<<<<<< HEAD
import sendHttpRequest from '../../apiRequest';
const BACKEND_URL = 'http://localhost:3000';

export const setLocalStorage = (data) => {
  const { token, cash_balance, name, picture } = data;
  localStorage.setItem("token", token);
  localStorage.setItem("cash_balance", cash_balance);
  localStorage.setItem("username", name);
  localStorage.setItem("picture", picture);
  return (dispatch) => {
    dispatch({ type: USER_LOADED, payload: data }),
    dispatch({ })
  };
};


/* export const login = ({ username, password }) => async dispatch => {
  const body =  {username, password} ;
  try {
      const res = await sendHttpRequest("POST" ,`${BACKEND_URL}/api/session`, body );
      //localStorage.setItem("token", data.token)
      return dispatch({ type: LOGIN_SUCCESS, payload_token: res.data });
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
    );
    dispatch({
      type: LOGIN_FAIL,
    });
  }
}; */
=======

export const setUser = (data) => {
  return (dispatch) => {
    dispatch({ type: USER_LOADED, payload: data });
  };
};
>>>>>>> new
