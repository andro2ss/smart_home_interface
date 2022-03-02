import React from "react";
import { Divider } from "@mui/material";

function Outlet({ device }) {
  return (
    <>
      <div className="container__text">
        <span className="container__text--title">Turned on:</span>
        <span className="container__text--normal">
          {device.isTurnedOn ? "ON" : "OFF"}
        </span>
      </div>
      <Divider />
      <div className="container__text">
        <span className="container__text--title">Power consumption:</span>
        <span className="container__text--normal">
          {device.powerConsumption} W
        </span>
      </div>
    </>
  );
}

export default Outlet;
