import { ActionTypes } from "../contants/action-types";

const intialState = {
    name:"Deependra Bharti",
    age:27,
    sex:"Male"
};
const changeTheNumber = (state=intialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
        return state;
        default: return state;
    }
}

export default changeTheNumber;