import {
  DOWNLOAD_ALL_ITEMS,
  SHOW_ITEM_AFTER_ID,
  ITEM_NOT_FOUND,
  ITEM_SOLD,
  CANCEL_ERR_MESSAGE,
  CANCEL_SPEC_ID,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  spec_id: "",
  err_message: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_ALL_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SHOW_ITEM_AFTER_ID:
      return {
        ...state,
        spec_id: action.payload,
      };
    case CANCEL_ERR_MESSAGE:
      console.log("IM CALLED  FROM REDUCER")
      return {
        ...state,
        err_message: "",
      };
    case CANCEL_SPEC_ID:
      return {
        ...state,
        spec_id: null,
      };
    case ITEM_NOT_FOUND:
      return {
        ...state,
        err_message: action.payload,
      };
    case ITEM_SOLD:
      return {
        state,
      };
    default:
      return state;
  }
}
