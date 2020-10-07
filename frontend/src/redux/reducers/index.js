import { combineReducers } from 'redux';

import ItemReducers from './itemsReducer'
import UserReducers from './usersReducers'



export default combineReducers({
  users : UserReducers,
  items : ItemReducers
})