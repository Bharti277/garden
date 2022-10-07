import changeTheNumber from "./reducer";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber
})

export default rootReducer;