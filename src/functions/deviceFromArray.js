export default function deviceFromArray(devices, id) {
  return devices.filter((device) => {
    return device.id === id;
  });
}
