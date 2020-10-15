import {
  DOWNLOAD_ALL_ITEMS,
  SHOW_ITEM_AFTER_ID,
  ITEM_NOT_FOUND,
  ITEM_SOLD,
  ITEM_ERROR_MESSAGE_DB,
  NEW_CASH_BALANCE
} from "./actionTypes";

import ApiReq from "../../apiRequest";
const apiReq = new ApiReq();

const url = "http://localhost:3000/api/items";

export const downloadItemsToStore = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    const allItems = await apiReq.setHeaderToken("GET", url, null, token);
    if (allItems.message) {
      dispatch({ type: ITEM_ERROR_MESSAGE_DB, payload: allItems.message });
    } else {
      dispatch({ type: DOWNLOAD_ALL_ITEMS, payload: allItems });
    }
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
    
    console.log(response.message);

    if (!response.cash) {
      dispatch({ type: ITEM_ERROR_MESSAGE_DB, payload: response.message });
    } else {
      dispatch({ type: NEW_CASH_BALANCE ,  payload: response.cash });
      dispatch({ type: ITEM_SOLD ,  payload: response.message });
    }
  };
};
