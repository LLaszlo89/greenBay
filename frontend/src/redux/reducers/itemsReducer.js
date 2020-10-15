import {
  DOWNLOAD_ALL_ITEMS,
  SHOW_ITEM_AFTER_ID,
  ITEM_NOT_FOUND,
  CANCEL_ERR_MESSAGE,
  ITEM_SOLD,
  ITEM_ERROR_MESSAGE_DB,
  REMOVE_ITEM,
  ADD_NEW_ITEM
} from "../actions/actionTypes";

const initialState = {
  items: [],
  spec_id: "",
  err_message: "",
  sold_message: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_ALL_ITEMS:
      return {
        ...state,
        items:  action.payload ,
      };
    case SHOW_ITEM_AFTER_ID:
      return {
        ...state,
        spec_id: action.payload,
      };
    case CANCEL_ERR_MESSAGE:
      return {
        ...state,
        err_message: "",
      };
    case ITEM_NOT_FOUND:
      return {
        ...state,
        err_message: action.payload,
      };
    case ADD_NEW_ITEM:
      console.log("IM REDUCER ADD " )
      return {
        ...state,
        items: state.items.concat(action.payload) 
      };
    case ITEM_ERROR_MESSAGE_DB:
    case ITEM_SOLD:
      return {
        ...state,
        sold_message: action.payload,
      };
    case REMOVE_ITEM:
      console.log("Should be state just state " , state.items[0])
      console.log("Should be action.payload" , action.payload)
      return {
        ...state,     
        items: state.items.filter( item => item.id !== action.payload),
      };
    default:
      return state;
  }
}
