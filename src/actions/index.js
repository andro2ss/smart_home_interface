export const setDeviceDetails = (value) => {
  return {
    type: "SETDEVICEDETAILS",
    payload: value,
  };
};

export const setDeviceDetailsId = (value) => {
  return {
    type: "SETDEVICEDETAILSID",
    payload: value,
  };
};

export const setModalClassName = (value) => {
  return {
    type: "CHANGEMODALCLASSNAME",
    payload: value,
  };
};
