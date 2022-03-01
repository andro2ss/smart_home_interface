import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./MultiActionAreaCard.scss";
import CardsActions from "./items/CardsActions";
import CardsBody from "./items/CardsBody";

export default function MultiActionAreaCard({
  device,
  setServerRequestStatus,
}) {
  const bulbImg = require("../../../../img/bulb.jpg");
  const outletImg = require("../../../../img/outlet.jpg");
  const thermostatImg = require("../../../../img/thermostat.jpg");
  let setImage = null;
  if (device.type === "bulb") {
    setImage = bulbImg;
  } else if (device.type === "outlet") {
    setImage = outletImg;
  } else {
    setImage = thermostatImg;
  }
  const classesName = "item item--" + device.connectionState;
  return (
    <Card sx={{ maxWidth: 160 }} className={classesName}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          image={setImage}
          alt={device.type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {device.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <CardsBody device={device} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardsActions
        deviceId={device.id}
        setServerRequestStatus={setServerRequestStatus}
      />
    </Card>
  );
}
