import {
  DOWNLOAD_ALL_ITEMS,
  SHOW_ITEM_AFTER_ID,
  ITEM_NOT_FOUND,
<<<<<<< HEAD
  ITEM_SOLD,
  CANCEL_ERR_MESSAGE,
  CANCEL_SPEC_ID,
=======
  CANCEL_ERR_MESSAGE,
  ITEM_SOLD , TEST
>>>>>>> new
} from "../actions/actionTypes";

const initialState = {
  items: [],
  spec_id: "",
  err_message: "",
<<<<<<< HEAD
=======
  new_price: null
>>>>>>> new
};
export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_ALL_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
<<<<<<< HEAD
      };
=======
      };    
>>>>>>> new
    case SHOW_ITEM_AFTER_ID:
      return {
        ...state,
        spec_id: action.payload,
<<<<<<< HEAD
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
=======
>>>>>>> new
      };
    case CANCEL_ERR_MESSAGE:
      return {
        ...state,
<<<<<<< HEAD
        err_message: action.payload,
      };
    case ITEM_SOLD:
      return {
        state,
=======
        err_message: "",
>>>>>>> new
      };
     case ITEM_NOT_FOUND:
      return {
        ...state,
        err_message: action.payload,
      }; 

      case ITEM_SOLD:
        console.log("item sold was called form reducer" , action.payload )
        return {
          ...state,
          new_price: action.payload
        };
    default:
      return state;
  }
}
