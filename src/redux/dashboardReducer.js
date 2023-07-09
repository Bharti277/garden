const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      console.log(action, "check in con");
      return {
        ...state,
        counter: state.counter + action.payload
      };
      case 'DECREMENT_COUNTER':
        return{
          ...state,
          counter: state.counter - action.payload
        }
    default:
      return state;
  }
};

export default counterReducer;
