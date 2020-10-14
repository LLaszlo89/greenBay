import {
  DOWNLOAD_ALL_ITEMS,
  SHOW_ITEM_AFTER_ID,
  ITEM_NOT_FOUND,
  NEW_BALANCE,
  ERROR_MESSAGE_DB,
} from "./actionTypes";

import ApiReq from "../../apiRequest";
const apiReq = new ApiReq();

const url = "http://localhost:3000/api/items";

export const download_items_to_store = () => {
  return async (dispatch) => {
    const allItems = await apiReq.sendHttpRequest("GET", url);
    dispatch({ type: DOWNLOAD_ALL_ITEMS, payload: allItems });
  };
};

export const findItem = (id) => {
  return async (dispatch) => {
    const newUrl = url + "/" + id;
    const token = localStorage.getItem("token");
    const resp = await apiReq.setHeaderToken("GET", newUrl, null, token);
    resp.message
      ? dispatch({ type: ITEM_NOT_FOUND, payload: resp })
      : dispatch({ type: SHOW_ITEM_AFTER_ID, payload: resp[0] });
  };
};

export const itemSold = (item_id) => {
  return async (dispatch) => {       
  const token = localStorage.getItem("token");
  const data = {
    name: localStorage.getItem("username"),
    id: item_id,
  };
  
  const response = await apiReq.setHeaderToken("PUT", url, data, token);
  
  if (!response.cash) {
    console.log("No many response :::::" , response.message);
    console.log(response.cash);
  } else {
    console.log(response.message);
    localStorage.setItem("cash_balance", response.cash);
    dispatch({ type: NEW_BALANCE , payload: response.cash });
  }
    dispatch({ type: ERROR_MESSAGE_DB, payload: response.message });
  };
};
