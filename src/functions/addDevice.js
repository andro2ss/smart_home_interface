import uniqueId from "./uniqueId";

class Device {
  constructor(name, type) {
    this.name = name;
    this.id = uniqueId();
    this.type = type;
    this.connectionState = "disconnected";
  }
}

class Bulb extends Device {
  constructor(name, type) {
    super(name, type);
    this.isTurnedOn = false;
    this.brightness = Math.floor(Math.random() * (100 - 1));
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}

class Outlet extends Device {
  constructor(name, type) {
    super(name, type);
    this.isTurnedOn = false;
    this.powerConsumption = Math.floor(Math.random() * (240 - 1));
  }
}

class TemperatureSensor extends Device {
  constructor(name, type) {
    super(name, type);
    this.isTurnedOn = false;
    this.temperature = Math.floor(Math.random() * (50 - 1));
  }
}

async function addingDevice(bodyContent) {
  fetch(`http://localhost:3000/api/v1/devices`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(bodyContent),
  }).then((res) => res.json());
}

export default function addDevice(deviceType, serverRequest) {
  const deviceName = prompt("Give device name");
  if (deviceName.length > 0) {
    if (deviceType === "bulb") {
      const newBulb = new Bulb(deviceName, deviceType);
      addingDevice(newBulb);
    }
    if (deviceType === "outlet") {
      const newOutlet = new Outlet(deviceName, deviceType);
      addingDevice(newOutlet);
    }
    if (deviceType === "temperatureSensor") {
      const newTemperatureSensor = new TemperatureSensor(
        deviceName,
        deviceType
      );
      addingDevice(newTemperatureSensor);
    }
    serverRequest("added Device");
  }
}
