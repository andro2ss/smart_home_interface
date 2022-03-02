const deviceDetails = (state = {}, action) => {
  switch (action.type) {
    case "SETDEVICEDETAILS":
      return action.payload;
    default:
      return state;
  }
};
export default deviceDetails;
