import { combineReducers } from "redux";
import templateReducer from "./template/templateReducer";

const rootReducer = combineReducers({
  templateReducer,
});

export default rootReducer;
