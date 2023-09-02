const initState = {
  name: "",
  age: "",
  color: "",
  textColor: "",
  backgroundColor: "",
  modalName: "",
  place: "",
  templateDetails: {
    isShow: true,
    personalInfo: [
      {
        name: "",
        email: "",
      },
      {
        name: "",
        email: "",
      },
    ],
  },
};

const templateReducer = (state = initState, action) => {
  switch (action.type) {
    case "RESET_INFO":
      return {
        ...initState,
      };
    case "UPDATE_TEXT_FIELD":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
