const deviceDetailsId = (state = 0, action) => {
  switch (action.type) {
    case "SETDEVICEDETAILSID":
      return action.payload;
    default:
      return state;
  }
};
export default deviceDetailsId;
