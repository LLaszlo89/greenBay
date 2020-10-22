import {
  DOWNLOAD_ALL_ITEMS,
  SHOW_ITEM_AFTER_ID,
  ITEM_NOT_FOUND,
  ITEM_SOLD,
  ITEM_ERROR_MESSAGE_DB,
  NEW_CASH_BALANCE,
  REMOVE_ITEM,
  ADD_NEW_ITEM
} from "./actionTypes";

import ApiReq from "../../apiRequest";
const apiReq = new ApiReq();

const url = "https://lehel-greenbay.herokuapp.com/api/items";

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

    if (!response.cash) {
      dispatch({ type: ITEM_ERROR_MESSAGE_DB, payload: response.message });
    } else {
      dispatch({ type: NEW_CASH_BALANCE, payload: response.cash });
      dispatch({ type: ITEM_SOLD, payload: response.message });
      dispatch({ type: REMOVE_ITEM, payload: item_id });
    }
  };
};

export const addNewItem = ({ title, URL, price, description }) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const user_name = localStorage.getItem("username");
    const values = { user_name: user_name, title, description, URL, price };

    const resp = await apiReq.setHeaderToken(
      "POST",
      url,
      values,
      token
    );

    console.log("This is the new resp Item action CREATE", resp);
      dispatch({ type: ADD_NEW_ITEM ,  payload: resp });
  };
};
