import { USER_LOADED , USER_ERROR_MESSAGE_DB , LOGOUT } from "./actionTypes";
import ApiReq from '../../apiRequest'
const apiReq = new ApiReq()

const url ="https://lehel-greenbay.herokuapp.com"

export const setUser = (values) => {
  return async (dispatch) => {
    const data = await apiReq.sendHttpRequest( "POST", `${url}/api/session`, values);
    if ( data.message ){
      dispatch({ type: USER_ERROR_MESSAGE_DB , payload: data.message });
    } else{
      dispatch({ type: USER_LOADED, payload: data });
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};
