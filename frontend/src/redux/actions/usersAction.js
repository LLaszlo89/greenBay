import { USER_LOADED , USER_ERROR_MESSAGE_DB } from "./actionTypes";
import ApiReq from '../../apiRequest'
const apiReq = new ApiReq()

const url ="http://localhost:3000"

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
