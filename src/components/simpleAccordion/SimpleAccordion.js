import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Devices from "./devices/Devices";
import "./SimpleAccordion.scss";

export default function SimpleAccordion({ devices, setServerRequestStatus }) {
  const devicesTypes = ["bulb", "outlet", "temperature Sensor"];
  return (
    <div className="container">
      {devicesTypes.map((deviceType, index) => {
        const ariaControls = "panel" + index + "-content";
        return (
          <Accordion key={deviceType}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={ariaControls}
              id={deviceType.replace(/\s/g, "")}
            >
              <Typography>{deviceType.toUpperCase()}S</Typography>
            </AccordionSummary>
            <AccordionDetails className="items__box">
              <Devices
                devices={devices}
                setServerRequestStatus={setServerRequestStatus}
                deviceType={deviceType}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
