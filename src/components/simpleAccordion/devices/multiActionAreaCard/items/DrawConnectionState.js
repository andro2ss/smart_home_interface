import React from "react";

export const DrawConnectionState = ({ device }) => {
  let circleClass = "circle ";
  switch (device.connectionState) {
    case "connected": {
      circleClass = "circle circle--green";
      return (
        <span className="text--normal">
          Connected
          <span className={circleClass} />{" "}
        </span>
      );
    }
    case "disconnected": {
      circleClass = "circle circle--red";
      return (
        <span className="text--normal">
          Disconnected
          <span className={circleClass} />{" "}
        </span>
      );
    }
    case "poorConnection": {
      circleClass = "circle circle--orange";
      return (
        <span className="text--normal">
          Poor connect
          <span className={circleClass} />{" "}
        </span>
      );
    }
    default:
      break;
  }
};
