import { combineReducers } from "redux";
import homeReducer from "modules/home/reducer";

export default combineReducers({
  ...homeReducer,
});
