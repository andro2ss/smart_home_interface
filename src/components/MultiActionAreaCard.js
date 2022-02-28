import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ device }) {
  const bulbImg = require("../img/bulb.jpg");
  const outletImg = require("../img/outlet.jpg");
  const thermostatImg = require("../img/thermostat.jpg");
  let setImage = null;
  if (device.type === "bulb") {
    setImage = bulbImg;
  } else if (device.type === "outlet") {
    setImage = outletImg;
  } else {
    setImage = thermostatImg;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={setImage}
          alt={device.type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {device.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>
              <span>Type:</span>
              <span>{device.type}</span>
            </span>
            <span>
              <span>Connection status:</span>
              <span>{device.connectionState}</span>
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
