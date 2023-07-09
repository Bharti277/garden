export const incrementCounter = (value) => {
  return {
    type: 'INCREMENT_COUNTER',
    payload: value
  };
};

export const decrementCounter = (value) => {
  return {
    type: 'DECREMENT_COUNTER',
    payload: value
  };
};