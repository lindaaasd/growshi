import { combineReducers } from "redux";
import chiliReducer from "./chiliReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  chilies: chiliReducer,
  cart: cartReducer,
});

export default rootReducer;
