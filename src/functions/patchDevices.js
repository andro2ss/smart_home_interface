export default async function patchDevices(device) {
  fetch(`http://localhost:3000/api/v1/devices/${device.id}`, {
    method: "PATCH",
    body: JSON.stringify(device),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}
