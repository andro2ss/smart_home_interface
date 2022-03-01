import React from "react";
import MultiActionAreaCard from "./multiActionAreaCard/MultiActionAreaCard";

function Devices({ devices, setServerRequestStatus, deviceType }) {
  return (
    <>
      {devices.filter((device) => {
        return device.type === deviceType.replace(/\s/g, "");
      }).length === 0
        ? "You dont have any: " + deviceType
        : devices
            .filter((device) => {
              return device.type === deviceType.replace(/\s/g, "");
            })
            .map((device) => {
              return (
                <MultiActionAreaCard
                  device={device}
                  key={device.id}
                  setServerRequestStatus={setServerRequestStatus}
                />
              );
            })}
    </>
  );
}

export default Devices;
