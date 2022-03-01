export default function deviceArray(devices, type) {
  return devices.filter((device) => {
    return device.type === type;
  });
}
