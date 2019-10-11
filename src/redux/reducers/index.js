import { combineReducers } from "redux";
import postReducer from "./example";
import userReducer from "./user";

export default combineReducers({
  posts: postReducer,
  user: userReducer
});
