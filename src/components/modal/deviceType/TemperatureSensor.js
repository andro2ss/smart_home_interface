import React from "react";

function TemperatureSensor({ device }) {
  return (
    <>
      <div className="container__text">
        <span className="container__text--title">Temperature:</span>
        <span className="container__text--normal">
          {device.temperature} Celsius
        </span>
      </div>
    </>
  );
}

export default TemperatureSensor;
