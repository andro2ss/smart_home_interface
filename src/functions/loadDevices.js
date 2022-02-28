export default async function loadDevices(setDevices, setStatus) {
  const apiUrl = "http://localhost:3000/api/v1/devices";
  const resp = await fetch(apiUrl);
  const respData = await resp.json();
  setDevices(respData);
  setStatus("loaded");
}
