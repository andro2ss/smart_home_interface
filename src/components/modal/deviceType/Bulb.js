import React from "react";
import { Divider } from "@mui/material";

function Bulb({ device }) {
  const divStyleColor = {
    background: device.color,
  };
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
        <span className="container__text--title">Brightness:</span>
        <span className="container__text--normal">{device.brightness}</span>
      </div>
      <Divider />
      <div className="container__text">
        <span className="container__text--title">Color:</span>
        <span className="container__text--normal">
          {device.color}
          <span className="square" style={divStyleColor} />
        </span>
      </div>
    </>
  );
}

export default Bulb;
