import { combineReducers } from "redux";
import postReducer from "./example";
import userReducer from "./user";

import { loadingReducer } from "./loadingReducer";
import { emailReducer } from "./emailReducer";
import { productsReducer } from "./productsReducer";
import { authorizationReducer } from "./authorizationReducer";
import { loginReducer } from "./loginReducers";

export default combineReducers({
  posts: postReducer,
  user: userReducer,
  loading: loadingReducer,
  isAuthenticated: loginReducer,
  products: productsReducer,
  authorization: authorizationReducer,
  email: emailReducer
});
