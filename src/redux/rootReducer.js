import { combineReducers } from "redux";
import counterReducer from "./dashboardReducer";

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
