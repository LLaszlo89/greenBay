import {  DOWNLOAD_ALL_ITEMS,  SHOW_ITEM_AFTER_ID,  HIDE_SOLD_ITEM,  ADD_NEW_ITEM } from "../actions/actionTypes";

const initialState = {
  items: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_ALL_ITEMS:
      return {
        ...state,
       items :[ ...state.items , action.payload]
      };
    default:
      return state;
  }
}

/* type : DOWNLOAD_ALL_ITEMS , payload : allItems  */