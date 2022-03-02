import patchDevices from "./patchDevices";

export default function serverChangesSymulation(devices) {
  if (devices.length > 0) {
    const temp = devices.map((item) => {
      const min = 1;
      const max = 3;
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      if (random === 1) {
        item.connectionState = "connected";
      } else if (random === 2) {
        item.connectionState = "disconnected";
      } else {
        item.connectionState = "poorConnection";
      }
      patchDevices(item);
      return item;
    });
  }
}
