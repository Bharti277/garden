import { combineReducers } from "redux";
import counterReducer from "./dashboardReducer";

const rootReducer = combineReducers({
  allProducts: counterReducer,
});

export default rootReducer;
