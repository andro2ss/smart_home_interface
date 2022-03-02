import React from "react";
import "./CardsBody.scss";
import { DrawConnectionState } from "./DrawConnectionState";

function CardsBody({ device }) {
  return (
    <span>
      <span className="text__container">
        <span className="text--title">Type:</span>
        <span className="text--normal">{device.type}</span>
      </span>
      <br />
      <span className="text__container">
        <span className="text--title">Connection status:</span>
        <DrawConnectionState device={device} />
      </span>
    </span>
  );
}

export default CardsBody;
