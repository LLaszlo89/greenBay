<<<<<<< HEAD
import { DOWNLOAD_ALL_ITEMS, SHOW_ITEM_AFTER_ID } from "./actionTypes";
=======
import { DOWNLOAD_ALL_ITEMS, SHOW_ITEM_AFTER_ID , ITEM_NOT_FOUND} from "./actionTypes";
>>>>>>> new_feat

import  ApiReq  from "../../apiRequest";
const apiReq = new ApiReq()

const url = "http://localhost:3000/api/items";

export const downloadItems = (data) => {
  const { token, cash_balance, name, picture } = data;
  localStorage.setItem("token", token);
  localStorage.setItem("cash_balance", cash_balance);
  localStorage.setItem("username", name);
  localStorage.setItem("picture", picture);

<<<<<<< HEAD
  return async (dispatch, getState) => {
    const allItems = await apiReq.sendHttpRequest("GET", url);

=======
  return async (dispatch) => {
    const allItems = await apiReq.sendHttpRequest("GET", url);
>>>>>>> new_feat
    dispatch({ type: DOWNLOAD_ALL_ITEMS, payload: allItems });
  };
};

export const findItem = (id) => {
<<<<<<< HEAD
  return async (dispatch, getState) => {
    const newUrl = url + "/" + id;
    const token = localStorage.getItem("token");
    const resp = await apiReq.setHeaderToken("GET" , newUrl , token)
=======
  return async (dispatch) => {
    const newUrl = url + "/" + id;
    const token = localStorage.getItem("token");
    const resp = await apiReq.setHeaderToken("GET" , newUrl , token)
    resp.message ? dispatch({ type: ITEM_NOT_FOUND , payload: resp }) :
    console.log("This is the action > answer", resp)
>>>>>>> new_feat
    dispatch({ type: SHOW_ITEM_AFTER_ID, payload: resp[0] });
  };
};
