import { combineReducers } from "redux";
import postReducer from "./example";
import userReducer from "./user";

import { loadingReducer } from "./loadingReducer";
import { authorizationReducer } from "./authorizationReducer";

export default combineReducers({
  posts: postReducer,
  user: userReducer,
  loading: loadingReducer,
  authorization: authorizationReducer,
});
