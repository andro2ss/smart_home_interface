const modalClassName = (state = "modal__window closed", action) => {
  switch (action.type) {
    case "CHANGEMODALCLASSNAME":
      return action.payload;
    default:
      return state;
  }
};
export default modalClassName;
