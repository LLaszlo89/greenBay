import {
  DOWNLOAD_ALL_ITEMS,
  SHOW_ITEM_AFTER_ID,
  ITEM_NOT_FOUND,
  USER_LOADED,
  ITEM_SOLD,
  CANCEL_ERR_MESSAGE,
  CANCEL_SPEC_ID
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

export const itemSold = async (item_id) => {
  const token = localStorage.getItem("token");
  const data = {
    name: localStorage.getItem("username"),
    id: item_id,
  };
  const response = await apiReq.setHeaderToken("PUT", url, data, token);

  return (dispatch) => {
    dispatch({ type: ITEM_SOLD }); 
  };
};

/* export const cancelErrMessage =()=>{
  return(dispatch)=>{
    dispatch({ type : CANCEL_ERR_MESSAGE })
  }
}
export const cancelSpecId =()=>{
  return(dispatch)=>{
    dispatch({ type : CANCEL_SPEC_ID })
  }
} */
