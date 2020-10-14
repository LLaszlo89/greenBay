import { USER_LOADED } from "./actionTypes";

export const setUser = (data) => {
  return (dispatch) => {
    dispatch({ type: USER_LOADED, payload: data });
  };
};
