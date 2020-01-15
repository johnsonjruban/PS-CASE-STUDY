import { combineReducers } from "redux";
import listReducer from "./user/listReducer";

const rootReducer = combineReducers({
  listuser: listReducer
});
export default rootReducer;
