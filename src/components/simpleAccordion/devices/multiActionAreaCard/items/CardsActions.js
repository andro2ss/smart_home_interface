import React from "react";
import { Button, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CardsActions.scss";
import deleteDevice from "../../../../../functions/deleteDevice";
import { useDispatch } from "react-redux";
import { setDeviceDetails, setDeviceDetailsId } from "../../../../../actions";

function CardsActions({ deviceId, setServerRequestStatus }) {
  const dispatch = useDispatch();

  return (
    <CardActions className="item__btn">
      <Button
        size="small"
        color="primary"
        onClick={() => {
          dispatch(setDeviceDetailsId(0));
          dispatch(setDeviceDetails({}));
          deleteDevice(deviceId, setServerRequestStatus);
        }}
      >
        Remove <DeleteIcon />
      </Button>
    </CardActions>
  );
}

export default CardsActions;
