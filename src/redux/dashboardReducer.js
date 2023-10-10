const initialState = {
  // allProducts: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SELECTED_PRODUCTS":
      return {
        ...state,
        selectedProducts: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
