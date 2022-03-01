import React from "react";
import { Button, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CardsActions.scss";
import deleteDevice from "../../../../../functions/deleteDevice";

function CardsActions({ deviceId, setServerRequestStatus }) {
  return (
    <CardActions className="item__btn">
      <Button
        size="small"
        color="primary"
        onClick={() => {
          deleteDevice(deviceId, setServerRequestStatus);
        }}
      >
        Remove <DeleteIcon />
      </Button>
    </CardActions>
  );
}

export default CardsActions;
