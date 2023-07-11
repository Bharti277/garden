export const incrementCounter = (value) => {
  return {
    type: "INCREMENT_COUNTER",
    payload: value,
  };
};

export const decrementCounter = (value) => {
  return {
    type: "DECREMENT_COUNTER",
    payload: value,
  };
};

export const capitalizeFirstLetter = (str) => {
  console.log(str.charAt(0).toUpperCase() + str.slice(1));
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const addNumberSuffix = (number) => {
  const suffixes = ["", " thousand", " million", " billion", " trillion"];
  let index = 0;

  while (number >= 1000) {
    number /= 1000;
    index++;
  }

  return `${number.toFixed(1)}${suffixes[index]}`;
};
