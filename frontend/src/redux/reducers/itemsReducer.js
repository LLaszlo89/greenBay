<<<<<<< HEAD
import {  DOWNLOAD_ALL_ITEMS , SHOW_ITEM_AFTER_ID } from "../actions/actionTypes";

const initialState = {
  items: [],
  spec_id : ""
=======
import {  DOWNLOAD_ALL_ITEMS , SHOW_ITEM_AFTER_ID , ITEM_NOT_FOUND } from "../actions/actionTypes";

const initialState = {
  items: [],
  spec_id : "" ,
  err_message:""
>>>>>>> new_feat
};
export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_ALL_ITEMS:
      return {
        ...state,
       items :[ ...state.items , action.payload]
      };
    case SHOW_ITEM_AFTER_ID:
      return {
        ...state,
<<<<<<< HEAD
        spec_id : action.payload
=======
        spec_id : action.payload,

      };
    case ITEM_NOT_FOUND:
      return {
        ...state,
        err_message : action.payload
>>>>>>> new_feat
      };
    default:
      return state;
  }
}
