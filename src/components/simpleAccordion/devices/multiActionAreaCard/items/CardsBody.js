import React from "react";
import "./CardsBody.scss";

function CardsBody({ device }) {
  let circleClass = "circle ";

  const DrawConnectionState = ({ device }) => {
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
