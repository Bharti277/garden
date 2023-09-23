export const setProducts = (value) => {
  return {
    type: "SET_PRODUCTS",
    payload: value,
  };
};

export const selectedProducts = (value) => {
  return {
    type: "SELECTED_PRODUCTS",
    payload: value,
  };
};

export const removeProducts = (value) => {
  return {
    type: "REMOVE_PRODUCTS",
    payload: value,
  };
};
