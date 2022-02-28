import { useEffect, useState } from "react";
import loadDevices from "./functions/loadDevices";
import SimpleAccordion from "./components/SimpleAccordion";

function App() {
  const [devices, setDevices] = useState([]);
  const [serverRequestStatus, setServerRequestStatus] = useState("init");

  useEffect(() => {
    loadDevices(setDevices, setServerRequestStatus);
  }, []);

  return (
    <div className="App">
      {devices.length > 1 ? (
        <SimpleAccordion devices={devices} />
      ) : (
        "You dont have devices"
      )}
    </div>
  );
}

export default App;
