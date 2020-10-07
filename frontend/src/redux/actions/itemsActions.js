import { DOWNLOAD_ALL_ITEMS } from "./actionTypes";
import sendHttpRequest from "../../apiRequest";

const url = "http://localhost:3000/api/items";

export const downloadItems = (data) => {
  const { token, cash_balance, name } = data;
  localStorage.setItem("token", token);
  localStorage.setItem("cash_balance", cash_balance);
  localStorage.setItem("username", name);

  return async (dispatch, getState) => {
    const allItems = await sendHttpRequest("GET", url);

    dispatch({ type: DOWNLOAD_ALL_ITEMS, payload: allItems });
  };
};
