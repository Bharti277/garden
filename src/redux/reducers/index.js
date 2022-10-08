import changeTheNumber from "./reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    allProducts:changeTheNumber
})

export default rootReducer;