import { combineReducers } from "redux";
import modalClassName from "./modalClassName";
import deviceDetails from "./deviceDetails";
import deviceDetailsId from "./deviceDetailsId";

const allReducers = combineReducers({
  modalClassName,
  deviceDetails,
  deviceDetailsId,
});

export default allReducers;
