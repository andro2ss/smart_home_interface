export default async function deleteDevice(id, removeDevice) {
  fetch(`http://localhost:3000/api/v1/devices/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      removeDevice("removed device: " + id);
    });
}
