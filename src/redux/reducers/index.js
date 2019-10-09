import { combineReducers } from "redux";
import postReducer from "./example";

export default combineReducers({
  posts: postReducer
});
