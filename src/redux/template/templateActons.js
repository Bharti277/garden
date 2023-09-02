export const updateTextField = (key, value) => {
  return {
    type: "UPDATE_TEXT_FIELD",
    key,
    value,
  };
};
