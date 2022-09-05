import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer, filterCartReducer } from "./reducer";

export default combineReducers({
  items: cartReducer,
  filter: filterCartReducer,
});
