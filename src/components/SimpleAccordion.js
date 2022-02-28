import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MultiActionAreaCard from "./MultiActionAreaCard";

export default function SimpleAccordion({ devices }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Bulbs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/*<Typography>*/}
          {devices
            .filter((device) => {
              console.log(device);
              return device.type === "bulb";
            })
            .map((device) => {
              return <MultiActionAreaCard device={device} key={device.id} />;
            })}
          {/*</Typography>*/}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Outlets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/*<Typography>*/}
          {devices
            .filter((device) => {
              console.log(device);
              return device.type === "outlet";
            })
            .map((device) => {
              return <MultiActionAreaCard device={device} key={device.id} />;
            })}
          {/*</Typography>*/}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Temperature Sensors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/*<Typography>*/}
          {devices
            .filter((device) => {
              console.log(device);
              return device.type === "temperatureSensor";
            })
            .map((device) => {
              return <MultiActionAreaCard device={device} key={device.id} />;
            })}
          {/*</Typography>*/}
        </AccordionDetails>
      </Accordion>
      {/*<Accordion disabled>*/}
      {/*  <AccordionSummary*/}
      {/*    expandIcon={<ExpandMoreIcon />}*/}
      {/*    aria-controls="panel3a-content"*/}
      {/*    id="panel3a-header"*/}
      {/*  >*/}
      {/*    <Typography>Disabled Accordion</Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*</Accordion>*/}
    </div>
  );
}
