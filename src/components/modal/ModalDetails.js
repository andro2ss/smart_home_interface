import React from "react";
import "./ModalDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import OutlinedButtons from "../common/buttons/OutlinedButtons";
import { setModalClassName } from "../../actions";
import interactive from "../../functions/interactive";
import Bulb from "./deviceType/Bulb";
import { Divider } from "@mui/material";
import Outlet from "./deviceType/Outlet";
import TemperatureSensor from "./deviceType/TemperatureSensor";

function ModalDetails() {
  const dispatch = useDispatch();
  const modalClassName = useSelector((state) => state.modalClassName);
  const device = useSelector((state) => state.deviceDetails);

  interactive();

  return (
    <div className={modalClassName}>
      {!device ? (
        "no data"
      ) : (
        <>
          <h2>{device.name}</h2>
          <Divider />
          <div className="container__text">
            <span className="container__text--title">Type:</span>
            <span className="container__text--normal">{device.type}</span>
          </div>
          <Divider />
          <div className="container__text">
            <span className="container__text--title">ID:</span>
            <span className="container__text--normal">{device.id}</span>
          </div>
          <Divider />
          <div className="container__text">
            <span className="container__text--title">Connection status:</span>
            <span className="container__text--normal">
              {device.connectionState}
            </span>
          </div>
          <Divider />
          {device.type === "bulb" ? <Bulb device={device} /> : ""}
          {device.type === "outlet" ? <Outlet device={device} /> : ""}
          {device.type === "temperatureSensor" ? (
            <TemperatureSensor device={device} />
          ) : (
            ""
          )}
          <OutlinedButtons
            text={"CLOSE"}
            onClick={() => {
              dispatch(setModalClassName("modal__window closed"));
            }}
          />
        </>
      )}
    </div>
  );
}

export default ModalDetails;
